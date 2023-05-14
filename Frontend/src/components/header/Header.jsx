import {
  faBed,
  faCalendarDays,
  faCar,
  faLocationDot,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { DateRange } from "react-date-range";
import { useContext, useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    people: 1,
  });
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const { dispatch } = useContext(SearchContext);

  const handleSearch = () => {
    // dispatch({ type: "NEW_SEARCH", payload });
    navigate("/vehicleList", {
      state: { destination, date, options },
    });
  };

  const [active, setActive] = useState("hotels");

  let isHotel = window.location.href === "http://localhost:3000/hotel-home" ? true : false;
  let isEvent = window.location.href === "http://localhost:3000/eventhome" ? true : false;
  let isFlights = window.location.href === "http://localhost:3000/flights" ? true : false;
  let isTransport = window.location.href === "http://localhost:3000/transport" ? true : false;
  let isResturent = window.location.href === "http://localhost:3000/resturents" ? true : false;

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div className={`headerListItem ${isHotel?'active':''}`} onClick={() => window.location.replace("/hotel-home")}>
            <FontAwesomeIcon icon={faBed} />
            <span>Hotels</span>
          </div>
          <div className={`headerListItem ${isFlights?'active':''}`} onClick={() => window.location.replace("/flights")}>
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className={`headerListItem ${isTransport?'active':''}`} onClick={() => window.location.replace("/transport")} >
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>
          <div  className={`headerListItem ${isResturent?'active':''}`} onClick={() => window.location.replace("/resturents")}>
            <FontAwesomeIcon icon={faBed} />
            <span>Resturents</span>
          </div>
          <div className={`headerListItem ${isEvent?'active':''}`} onClick={() => window.location.replace("/eventhome")}>
            <FontAwesomeIcon icon={faTaxi} />
            <span>Packages</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <div className="headerBottomWrapper">
              <h1 className="headerTitle">
                A lifetime of discounts? It's Genius.
              </h1>
              <p className="headerDesc">
                Get rewarded for your travels – unlock instant savings of 10% or
                more with a free TravelWise account
              </p>
              <button className="headerBtn">Sign in / Register</button>
            </div>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faLocationDot} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >{`${options.people} people`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">People</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.people <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("people", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.people}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("people", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;

import VehicleProviders from "../../components/vehicleProviders/VehicleProviders";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./vehicleHome.css";

const VehicleHome = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <VehicleProviders />
        <Footer />
      </div>
    </div>
  );
};

export default VehicleHome;

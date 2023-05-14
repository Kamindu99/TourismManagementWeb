import express from "express";
import {
createEventBookings,
deleteEventBookings,
getEventBookingss,
getEventBookings,
updateEventBookings
} from "../controllers/sportBooking.js";

const router = express.Router();

//CREATE
router.post("/add", createEventBookings);

//UPDATE
router.put("/update/:id", updateEventBookings);

//DELETE
router.delete("/delete/:id", deleteEventBookings);

//GET
router.get("/:id", getEventBookings);

//GET ALL
router.get("/", getEventBookingss);

export default router;

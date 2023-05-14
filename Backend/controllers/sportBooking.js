import EventBookings from "../models/SportBookingModel.js";

//CREATE
export const createEventBookings = async (req, res, next) => {
    const newEventBookings = new EventBookings(req.body);

    try {
        const savedEventBookings = await newEventBookings.save();
        res.status(200).json(savedEventBookings);
    } catch (err) {
        next(err);
    }
};

//UPDATE
export const updateEventBookings = async (req, res, next) => {
    try {
        const updatedEventBookings = await EventBookings.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedEventBookings);
    } catch (err) {
        next(err);
    }
};

//DELETE
export const deleteEventBookings = async (req, res, next) => {
    try {
        await EventBookings.findByIdAndDelete(req.params.id);
        res.status(200).json("EventBookings has been deleted.");
    } catch (err) {
        next(err);
    }
};

//GET
export const getEventBookings = async (req, res, next) => {
    try {
        const displayEventBookings = await EventBookings.findById(req.params.id);
        res.status(200).json(displayEventBookings);
    } catch (err) {
        next(err);
    }
};

//GET ALL
export const getEventBookingss = async (req, res, next) => {
    try {
      const displayEventBookingss = await EventBookings.find();
      res.status(200).json(displayEventBookingss);
    } catch (err) {
      next(err);
    }
  };
  
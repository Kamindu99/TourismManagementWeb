import Event from "../models/SportEventesModel.js";

//CREATE
export const createEvent = async (req, res, next) => {
    const newEvent = new Event(req.body);

    try {
        const savedEvent = await newEvent.save();
        res.status(200).json(savedEvent);
    } catch (err) {
        next(err);
    }
};

//UPDATE
export const updateEvent = async (req, res, next) => {
    try {
        const updatedEvent = await Event.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedEvent);
    } catch (err) {
        next(err);
    }
};

//DELETE
export const deleteEvent = async (req, res, next) => {
    try {
        await Event.findByIdAndDelete(req.params.id);
        res.status(200).json("Event has been deleted.");
    } catch (err) {
        next(err);
    }
};

//DELETE SUB
export const deleteSubEvent = async (req, res, next) => {
    let eventId = req.params.id;
    let subId = req.params.fid;
    try {
        const event = await Event.findById(eventId);
        if (!event) {
            return res.status(404).json({ success: false, message: "Event not found" });
        }
        const subItem = event.eventsubItems.id(subId);
        if (!subItem) {
            return res.status(404).json({ success: false, message: "Sub item not found" });
        }
        if (event.eventsubItems.length === 0) {
            return res.status(404).json({ success: false, message: "No sub items found" });
        }
       // subItem.remove();
        event.eventsubItems.splice(subId,1)
        
        // Remove the sub item
        await event.save(); // Save the updated event object
        return res.status(200).json({
            success: true,
            message: "Sub item deleted successfully",
        });
    } catch (err) {
        next(err);
    }
};


//GET
export const getEvent = async (req, res, next) => {
    try {
        const displayEvent = await Event.findById(req.params.id);
        res.status(200).json(displayEvent);
    } catch (err) {
        next(err);
    }
};

//GET SUB EVENTS
export const getSubEvent = async (req, res, next) => {
    try {
        const displayEvent = await Event.findById(req.params.id);

        res.status(200).json(displayEvent.eventsubItems.id(req.params.fid));
    } catch (err) {
        next(err);
    }
};

//GET ALL
export const getEvents = async (req, res, next) => {
    const eventType = req.query.eventType;
    let query = {};
    if (eventType) {
        query = { eventType: eventType };
    }
    try {
        const displayEvents = await Event.find(query);
        res.status(200).json(displayEvents);
    } catch (err) {
        next(err);
    }
};
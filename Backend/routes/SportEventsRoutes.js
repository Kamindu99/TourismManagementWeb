import express from "express";
import {
    deleteEvent,
    getEvent,
    getEvents,
    updateEvent,
    createEvent,
    getSubEvent,
    deleteSubEvent
} from "../controllers/sportevent.js";

const router = express.Router();

//CREATE
router.post("/add", createEvent);

//UPDATE
router.put("/:id", updateEvent);

//DELETE
router.delete("/delete/:id", deleteEvent);

//DELETE SUB
router.delete("/:id/:fid", deleteSubEvent);

//GET
router.get("/:id", getEvent);

//GET SUB
router.get("/:id/:fid", getSubEvent);

//GET ALL
router.get("/", getEvents);

export default router;

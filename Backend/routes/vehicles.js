import express from "express";
import Vehicle from "../models/Vehicle.js";
import {
  countByLocation,
  countByType,
  createVehicle,
  deleteVehicle,
  getVehicle,
  getVehicles,
  updateVehicle,
} from "../controllers/vehicle.js";
import multer from "multer";

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(
      null,
      `${file.originalname}${
        Math.floor(Math.random() * 90000000) + 10000000
      }.${ext}`
    );
  },
});
const upload = multer({ storage: multerStorage });

const router = express.Router();

//CREATE
router.post("/", upload.single("image"), createVehicle);

//UPDATE
router.put("/:id", updateVehicle);

//DELETE
router.delete("/:id", deleteVehicle);

//GET
router.get("/find/:id", getVehicle);

//GET ALL
router.get("/", getVehicles);

router.get("/countByLocation", countByLocation);
router.get("/countByType", countByType);
// router.get("/reservation/:id",);

export default router;

const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const authMiddleware = require("../middleware/auth.middleware");
const rideController = require("../Controllers/ride.controller");
module.exports = router;

router.post(
  "/create",
  authMiddleware.authUser,
  body("pickup")
    .isString()
    .isLength({ min: 3 })
    .withMessage("pickup must be a string with length greater than 3"),
  body("destination")
    .isString()
    .isLength({ min: 3 })
    .withMessage("destination must be a string with length greater than 3"),
  body("vehicleType")
    .isString()
    .isIn(["auto", "car", "motorcycle"])
    .withMessage("vehicleType must be either auto, car, or motorcycle"),
  body("otp")
    .isString()
    .isLength({ min: 6, max: 6 })
    .withMessage("otp must be a string with length 6"),
  rideController.createRide
);

const rideModel = require("../models/ride.model");
const rideService = require("../services/ride.service");
const mapsService = require("../services/maps.service");
const { validationResult } = require("express-validator");

module.exports.createRide = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ message: "Validation error", errors: errors.array() });
  }
  const { pickup, destination, vehicleType,otp } = req.body;
  try {
    const ride = await rideService.createRide(
      req.user._id,
      pickup,
      destination,
      vehicleType,
      otp
    );
    res.status(201).json(ride);
  } catch (error) {
    res.status(400).json({ message: "ride not created", error: error.message });
  }
};

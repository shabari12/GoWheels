const mapsService = require("../services/maps.service");
const { validationResult } = require("express-validator");
module.exports.getCordinates = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { address } = req.query;
  try {
    const coordinates = await mapsService.getAddressCoordinate(address);
    res.status(200).json(coordinates);
  } catch (error) {
    res.status(400).json({ message: "cordinate not found" });
  }
};

module.exports.getDistanceTime = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { origin, destination } = req.query;
  try {
    const distanceTime = await mapsService.getDistanceTime(origin, destination);
    res.status(200).json(distanceTime);
  } catch (error) {
    res.status(400).json({ message: "distance and time not found" });
  }
};

module.exports.getAutoCompleteSuggestions = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { input } = req.query;
  try {
    const suggestions = await mapsService.getAutoCompleteSuggestions(input);
    res.status(200).json(suggestions);
  } catch (error) {
    res.status(400).json({ message: "suggestions not found" });
  }
};

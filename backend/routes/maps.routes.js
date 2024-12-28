const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth.middleware");
const mapController = require("../Controllers/maps.controller");
const { query } = require("express-validator");

module.exports = router;

router.get(
  "/get-cordinates",
  query("address").isString().isLength({ min: 3 }),
  authMiddleware.authUser,
  mapController.getCordinates
);

router.get(
  "/get-distance-time",
  query("origin").isString().isLength({ min: 3 }),
  query("destination").isString().isLength({ min: 3 }),
  authMiddleware.authUser,
  mapController.getDistanceTime
);

router.get(
  "/get-suggestions",
  query("input").isString().isLength({ min: 3 }),
  authMiddleware.authUser,
  mapController.getAutoCompleteSuggestions
);

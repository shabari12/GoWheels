const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const captainController = require("../controllers/captain.controller");
const authMiddleware = require("../middlewares/auth.middleware");
router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters"),
    body("fullname.lastname")
      .isLength({ min: 3 })
      .withMessage("Last name must be at least 3 characters"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
    body("vehicle.color")
      .isLength({ min: 3 })
      .withMessage("Color must be at least 3 characters"),
    body("vehicle.plate")
      .isLength({ min: 3 })
      .withMessage("Plate must be at least 3 characters"),
    body("vehicle.capacity")
      .isLength({ min: 1 })
      .withMessage("Capacity must be provided"),
    body("vehicle.vehicleType")
      .isLength({ min: 3 })
      .withMessage("Vehicle Type must be at least 3 characters"),
  ],
  captainController.registerCaptain
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
  ],
  captainController.loginCaptain
);
router.get(
  "/profile",
  authMiddleware.authCaptain,
  captainController.getCaptainProfile
);
router.get(
  "/logout",
  authMiddleware.authCaptain,
  captainController.logoutCaptain
);

module.exports = router;

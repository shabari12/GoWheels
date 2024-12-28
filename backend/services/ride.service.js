const rideModel = require("../models/ride.model");
const mapsService = require("../services/maps.service");

const crypto = require("crypto");
async function getFare(pickup, destination) {
  if (!pickup || !destination) {
    throw new Error("pickup and destination are required");
  }
  const distanceTime = await mapsService.getDistanceTime(pickup, destination);

  const baseFare = 50;
  const farePerKm = {
    auto: 10,
    car: 15,
    motorcycle: 5,
  };
  console.log(distanceTime);
  const fare = {
    auto: baseFare + farePerKm.auto * parseFloat(distanceTime.distance),
    car: baseFare + farePerKm.car * parseFloat(distanceTime.distance),
    motorcycle:
      baseFare + farePerKm.motorcycle * parseFloat(distanceTime.distance),
  };
  console.log(fare);
  return fare;
}

function getOTP(num) {
  const otp = crypto
    .randomInt(0, Math.pow(10, num))
    .toString()
    .padStart(num, "0");

  return otp;
}

console.log(getOTP(4));

module.exports.createRide = async (
  userId,
  pickup,
  destination,
  vehicleType
) => {
  if (!userId || !pickup || !destination || !vehicleType) {
    throw new Error("user, pickup, destination, and vehicleType are required");
  }
  const otp = await getOTP(6);
  const fare = await getFare(pickup, destination);
  const ride = new rideModel({
    userId,
    pickup,
    destination,
    fare: fare[vehicleType],
    otp,
  });
  await ride.save();
  return ride;
};

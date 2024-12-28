const axios = require("axios");

const GOOGLE_MAPS_API = process.env.GOOGLE_MAPS_API;

module.exports.getAddressCoordinate = async (address) => {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json`,
      {
        params: {
          address: address,
          key: GOOGLE_MAPS_API,
        },
      }
    );

    if (response.data.status === "OK") {
      const location = response.data.results[0].geometry.location;
      return {
        latitude: location.lat,
        longitude: location.lng,
      };
    } else {
      console.error("Google Maps API error:", response.data);
      throw new Error("Unable to fetch coordinates");
    }
  } catch (error) {
    console.error("Error fetching coordinates:", error.message);
    throw new Error("Error fetching coordinates");
  }
};

module.exports.getDistanceTime = async (origin, destination) => {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/distancematrix/json`,
      {
        params: {
          origins: origin,
          destinations: destination,
          key: GOOGLE_MAPS_API,
        },
      }
    );

    if (response.data.status === "OK") {
      const data = response.data.rows[0].elements[0];
      return {
        distance: data.distance.text,
        duration: data.duration.text,
      };
    } else {
      console.error("Google Maps API error:", response.data);
      throw new Error("Unable to fetch distance and time");
    }
  } catch (error) {
    console.error("Error fetching distance and time:", error.message);
    throw new Error("Error fetching distance and time");
  }
};

module.exports.getAutoCompleteSuggestions = async (input) => {
  if (!input) {
    throw new Error("Input is required");
  }
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json`,
      {
        params: {
          input: input,
          key: GOOGLE_MAPS_API,
        },
      }
    );

    if (response.data.status === "OK") {
      return response.data.predictions;
    } else {
      console.error("Google Maps API error:", response.data);
      throw new Error("Unable to fetch suggestions");
    }
  } catch (error) {
    console.error("Error fetching suggestions:", error.message);
    throw new Error("Error fetching suggestions");
  }
};

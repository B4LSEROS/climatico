import { Response, Request } from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export default async function geoLocationController(
  req: Request,
  res: Response
) {
  const location = req.query.location;

  // Validate the location input
  if (!location) {
    return res
      .status(400)
      .send({ error: "Location query parameter is required." });
  }

  try {
    // Make the GET request to OpenWeatherMap API
    const response = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct`,
      {
        params: {
          q: location, // Using params to correctly pass the query
          limit: 5,
          appid: process.env.WEATHER_API_KEY,
        },
      }
    );

    const data = {
      lat: response.data[0].lat,
      lon: response.data[0].lon,
    };

    // Log the data for debugging
    console.log("current geo location: " + data.lat);

    // Send the response
    return res.status(200).send(data);
  } catch (error) {
    console.error("Error fetching location data:", error);
    return res
      .status(500)
      .send({ error: "An error occurred while fetching location data." });
  }
}

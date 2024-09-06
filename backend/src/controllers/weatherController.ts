import { Request, Response } from "express";
import dotenv from "dotenv";
import axios from "axios";
import getGeoLocation from "../utils/getGeoLocation";

dotenv.config();

/**
 * Retrieves the weather data for the provided city
 * @param req - Request object containting the city name
 * @param res - Response object containging various weather info for the city
 */
export default async function weatherController(req: Request, res: Response) {
  const city = req.query.city as string;

  try {
    const coordinates = await getGeoLocation(city);

    if (!coordinates) {
      return res.status(404).json({ message: "Coordinates not found" });
    }

    const response = await axios.get(
      `https://api.openweathermap.org/data/3.0/onecall`,
      {
        params: {
          lat: coordinates.lat,
          lon: coordinates.lon,
          exclude: "minutely,hourly",
          appid: process.env.WEATHER_API_KEY,
        },
      }
    );

    return res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

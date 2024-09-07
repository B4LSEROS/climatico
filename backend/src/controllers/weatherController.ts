import { Request, Response } from "express";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

/**
 * Retrieves the weather data for the provided coordinates
 * @param req - Request object containing latitude and longitude
 * @param res - Response object containing weather info
 */
export default async function weatherController(req: Request, res: Response) {
  const latitude = req.query.lat;
  const longitude = req.query.lon;

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/3.0/onecall`,
      {
        params: {
          lat: latitude,
          lon: longitude,
          exclude: "minutely,hourly",
          appid: process.env.WEATHER_API_KEY,
        },
      }
    );

    return res.status(200).json({
      timezone: response.data.timezone,
      current_weather: response.data.current.temp,
    });
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

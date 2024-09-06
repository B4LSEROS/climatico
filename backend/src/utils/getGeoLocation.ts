import { Request, Response } from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

/**
 * Retrieves the latitude and longitude of the provided city
 * @param city - Name of the city to fetch coordinates for.
 * @returns - The latitude and longitude of the city or null if not found.
 */
export default async function getGeoLocation(
  city: string
): Promise<{ lat: number; lon: number } | null> {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${process.env.WEATHER_API_KEY}`,
      {
        params: {
          city: city,
          appid: process.env.WEATHER_API_KEY,
        },
      }
    );

    if (response.data.length === 0) {
      return null;
    }

    const coordinates = {
      lat: response.data[0].lat,
      lon: response.data[0].lon,
    };

    return coordinates;
  } catch (error) {
    console.error("Error fetching data from OpenWeatherMap API:", error);
    return null;
  }
}

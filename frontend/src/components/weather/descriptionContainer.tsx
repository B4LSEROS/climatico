"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import userLocation from "@/services/userLocation";

export default function DescriptionContainer() {
  const [weatherInfo, setWeatherInfo] = useState<any>();
  const [userLocationObject, setUserLocation] = useState<{
    lat: number;
    lon: number;
  } | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const getLocation = () => {
      return new Promise<void>((resolve, reject) => {
        userLocation(
          (position) => {
            setUserLocation({
              lat: position.coords.latitude,
              lon: position.coords.longitude,
            });
            resolve();
          },
          () => {
            setError("Unable to retrieve your location.");
            reject();
          }
        );
      });
    };

    getLocation().catch(() => {
      console.error("Error retrieving location");
    });
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      if (
        !userLocationObject ||
        !userLocationObject.lat ||
        !userLocationObject.lon
      )
        return; // Ensure location is set before fetching

      try {
        const response = await axios.get(
          "http://localhost:3001/currentWeather",
          {
            params: {
              lat: userLocationObject.lat,
              lon: userLocationObject.lon,
            },
          }
        );
        const data = response.data;
        setWeatherInfo(data);
      } catch (error) {
        console.error("Error fetching the weather data", error);
        setError("Failed to fetch weather data.");
      }
    };

    fetchWeather();
  }, [userLocationObject]); // Trigger only when userLocationObject is updated

  return (
    <div className="w-16 md:w-32 lg:w-48 bg">
      {weatherInfo && // Ensure weatherInfo is available before mapping
        Object.keys(weatherInfo).map((key: string) => (
          <h1 key={key}>{`${key}: ${weatherInfo[key]}`}</h1>
        ))}

      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}

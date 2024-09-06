"use client";

import { useState, useEffect } from "react";
import axios from "axios";

export default function DescriptionContainer() {
  const [weatherInfo, setWeatherInfo] = useState<string>("");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/currentWeather",
          {
            params: {
              city: "porto",
            },
          }
        );
        const data = response.data.timezone;
        setWeatherInfo(data);
      } catch (error) {
        console.error("Error fetching the weather data", error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="w-16 md:w-32 lg:w-48 bg">
      <h1 className="text-black">{weatherInfo}</h1>
    </div>
  );
}

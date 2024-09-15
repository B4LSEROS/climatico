"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import personUmbrella from "../../public/utilities/personUmbrella.png";
import MyLocationContainer from "@/components/weather/myLocationContainer";
import SearchBar from "@/components/searchBar";
import WeatherInfoContainer from "@/components/weather/weatherInfoContainer";

export default function Home() {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [location, setLocation] = useState({
    lat: 51.5073219,
    lon: -0.1276474,
  });

  // Fetch weather info whenever the location changes
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/currentWeather",
          {
            params: location,
          }
        );

        setWeatherInfo(response.data);
        console.log(response.data); // Shows the correct JSON object
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather();
  }, [location]); // Fetch weather info on location change

  // Log updated weatherInfo
  useEffect(() => {
    if (weatherInfo) {
      console.log(weatherInfo); // Will show the updated weatherInfo when it changes
    }
  }, [weatherInfo]); // Dependency array includes weatherInfo

  return (
    <main className="flex min-h-screen flex-col items-center align-items p-24">
      <SearchBar setLocation={setLocation} />
      {weatherInfo ? (
        <WeatherInfoContainer currentTemp={weatherInfo} />
      ) : (
        <p>Loading weather information...</p>
      )}
      <Image
        src={personUmbrella}
        alt="Cloud with rain image"
        width={300}
        height={200}
      />
    </main>
  );
}

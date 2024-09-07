"use client";

import React, { useState, useEffect } from "react";
import userLocation from "../../services/userLocation"; // Import the userLocation function

/**
 * Asks and displays user's current location's weather
 * @returns - React component containing user's current location's weather
 */
export default function MyLocationContainer(): React.ReactElement {
  const [userLocationString, setUserLocation] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    // Use the userLocation function and pass callbacks
    userLocation(
      (position) => {
        setUserLocation(
          `lat=${position.coords.latitude}&lon=${position.coords.longitude}`
        );
      },
      () => {
        setError("Unable to retrieve your location.");
      }
    );
  }, []);

  return (
    <div>
      {userLocationString ? (
        <p>Your location is: {userLocationString}</p>
      ) : (
        <p>{error ? error : "Fetching your location..."}</p>
      )}
    </div>
  );
}

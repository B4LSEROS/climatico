import React from "react";
import Image from "next/image";
import Sun from "../../../public/weatherIcons/sun.png";

interface WeatherInfoProps {
  currentTemp: {
    timezone?: string;
    current_weather?: any;
  };
}

export default function WeatherInfoContainer({
  currentTemp,
}: WeatherInfoProps): React.ReactElement {
  // Ensure currentTemp is defined and has a timezone property
  if (!currentTemp || !currentTemp.timezone) {
    return <p>No timezone data available</p>;
  }

  return (
    <div className="w-full max-w-md bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-lg overflow-hidden text-white">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">{currentTemp.timezone}</h2>
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-5xl font-bold">
              {currentTemp.current_weather.fahrenheit}
            </p>
            <p className="text-xl">{currentTemp.current_weather.celsius}</p>
          </div>
          <Image src={Sun} alt="sun icon" height="100" width="100"></Image>
        </div>
        <p className="text-xl mb-4 capitalize">Sunny</p>
        <div className="flex justify-between text-sm">
          <div className="flex items-center">
            <span>60% Humidity</span>
          </div>
          <div className="flex items-center">
            <span>10 km/h Wind</span>
          </div>
        </div>
      </div>
    </div>
  );
}

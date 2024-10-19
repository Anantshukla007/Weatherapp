import React, { useEffect, useState } from "react";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from "../services/weatherService";

function TemperatureAndDetails({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) {
  const [threshold, setThreshold] = useState(
    localStorage.getItem("tempThreshold") || 35 // Default threshold of 35°C if not set
  );
  const [previousTemps, setPreviousTemps] = useState([]);

  // Function to set the threshold in localStorage
  const handleSetThreshold = (e) => {
    const newThreshold = e.target.value;
    localStorage.setItem("tempThreshold", newThreshold);
    setThreshold(newThreshold);
  };

  // Check if temperature exceeds the threshold for two consecutive updates
  const checkTemperatureAlert = () => {
    const newTemp = temp.toFixed(1);
    setPreviousTemps((prevTemps) => {
      if (prevTemps.length >= 2) {
        prevTemps.shift(); // Keep only the last two temperatures
      }
      return [...prevTemps, newTemp];
    });

    if (previousTemps.length === 2 && previousTemps.every(t => t > threshold)) {
      alert(`Temperature alert! The temperature has exceeded ${threshold}°C for two consecutive updates.`);
      console.log("Alert: High temperature detected!");
    }
  };

  useEffect(() => {
    checkTemperatureAlert();
  }, [temp]); // Re-run the alert check whenever the temperature updates

  return (
    <div>
      {/* Threshold Input */}
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <label>
          Set Temperature Threshold:{" "}
          <input
            type="number"
            value={threshold}
            onChange={handleSetThreshold}
            className="text-black px-2 py-1"
          />{" "}
          °C
        </label>
      </div>

      <div className="flex flex-row items-center justify-between text-white py-3">
        <img src={iconUrlFromCode(icon)} alt="" className="w-20" />
        <p className="text-5xl">{`${temp.toFixed()}°`}</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1" />
            Real fell:
            <span className="font-medium ml-1">{`${feels_like.toFixed()}°`}</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">{`${humidity.toFixed()}%`}</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">{`${speed.toFixed()} km/h`}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <UilSun />
        <p className="font-light">
          Rise:{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(sunrise, timezone, "hh:mm a")}
          </span>
        </p>
        <p className="font-light">|</p>

        <UilSunset />
        <p className="font-light">
          Set:{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(sunset, timezone, "hh:mm a")}
          </span>
        </p>
        <p className="font-light">|</p>

        <UilSun />
        <p className="font-light">
          High:{" "}
          <span className="font-medium ml-1">{`${temp_max.toFixed()}°`}</span>
        </p>
        <p className="font-light">|</p>

        <UilSun />
        <p className="font-light">
          Low:{" "}
          <span className="font-medium ml-1">{`${temp_min.toFixed()}°`}</span>
        </p>
        <p className="font-light">|</p>

        <UilTemperature />
        <p className="font-light">
          Avg:{" "}
          <span className="font-medium ml-1">{`${((temp_min + temp_max) / 2).toFixed(1)}°`}</span>
        </p>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;

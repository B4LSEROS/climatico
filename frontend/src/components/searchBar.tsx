import React, { useState } from "react";
import axios from "axios";

export default function SearchBar({
  setLocation,
}: {
  setLocation: (location: any) => void;
}): React.ReactElement {
  const [searchInput, setSearchInput] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validate input
    if (searchInput.trim() === "" || searchInput.includes(" ")) {
      window.alert("Invalid city");
      return;
    }

    try {
      // Make API request
      const response = await axios.get("http://localhost:3001/getGeoLocation", {
        params: {
          location: searchInput,
        },
      });

      // Extract the data and set location
      if (response.data) {
        setLocation(response.data); // Adjust this line based on what setLocation expects
      } else {
        window.alert("Location not found");
      }
    } catch (error) {
      console.error("Error fetching location:", error);
      window.alert("Error fetching location. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center w-full max-w-md mx-auto"
    >
      <input
        className="w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:outline-none focus:border-blue-500"
        placeholder="Search weather by city"
        required
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
      ></input>
      <button
        className="px-4 py-2 text-white bg-blue-500 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        aria-label="Search button"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}

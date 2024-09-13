import React, { useState, useEffect } from "react";

export default function SearchBar(): React.ReactElement {
  const [searchInput, setSearchInput] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validateInput = () => {
      if (searchInput.includes(" ")) {
        window.alert("Invalid city");
        return false;
      }
    };

    if (validateInput()) setSearchInput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center w-full max-w-md mx-auto"
    >
      <input
        className="w-full px-4 py-2 text-gray-700 bg-white border rounded-1-1g focus:outline-none focus:border-blue-500"
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

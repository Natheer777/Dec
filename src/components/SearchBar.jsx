import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useTranslation } from "react-i18next";

import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {
  const { t } = useTranslation();
  const [input, setInput] = useState("");

  const fetchData = async (value) => {
    try {
      const response = await fetch(
        "https://a-lokl.onrender.com/https://testdata-1.onrender.com/allusers"
      );
      const json = await response.json();
      const results = json.filter((dec) => {
        const searchValue = value.toLowerCase().trim();
        const name = (dec.name || "").toLowerCase(); // Check for null/undefined
        const details = (dec.details || "").toLowerCase(); // Check for null/undefined
        const more = (dec.more || "").toLowerCase(); // Check for null/undefined
        return name.includes(searchValue) || details.includes(searchValue) || more.includes(searchValue);
      });
      setResults(results);
    } catch (error) {
      console.error("Error fetching data:", error);
      setResults([]);
    }
  };

  const handleChange = (value) => {
    setInput(value);
    if (value.trim() === "") {
      setResults([]); // Clear results when input is empty
    } else {
      fetchData(value);
    }
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder={t("Type to search...")} // Translate placeholder text
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

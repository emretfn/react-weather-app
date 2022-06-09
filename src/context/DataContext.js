import { createContext } from "react";
import cities from "../data/cities.json";
import { useState } from "react";

const DataContext = createContext();

export default DataContext;

export const DataProvider = ({ children }) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const [weather, setWeather] = useState([]);

  const [city, setCity] = useState(cities.find((e) => e.id === 42));

  const API_KEY = process.env.REACT_APP_API_KEY;

  const values = { cities, days, API_KEY, city, setCity, weather, setWeather };

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

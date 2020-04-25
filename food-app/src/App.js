import React,{ useState }  from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './main';
import Filters from "./components/Filter/Filter";

const filters = [
  {
      name: "category",
      values: ["veg", "non-veg", "drink"]
  },
  {
      name: "price",
      values: ["0-99", "100-199", "200-299", "300-399"]
  },
  {
      name: "available",
      values: ["available", "out of stock"]
  },
  {
      name: "search",
      input: true
  }
];

const App = () => {
  const [preferenceFilter, setPreferenceFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  const [availabilityFilter, setAvailabilityFilter] = useState("");

  const values = {
    "category": preferenceFilter,
    "price": priceFilter,
    "available": availabilityFilter,
    "search": searchFilter
  };

  const methods = {
    "category": setPreferenceFilter,
    "price": setPriceFilter,
    "available": setAvailabilityFilter,
    "search": setSearchFilter
  }

  return (
    <div className="App">
      <Filters filters={filters} values={values} methods={methods}/>
      {`
        Search string: ${searchFilter}
        Price Range: ${priceFilter}
        Preference: ${preferenceFilter}
        Availability: ${availabilityFilter} 
      `}
    </div>
  );
}

export default App;
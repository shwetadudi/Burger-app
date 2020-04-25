import React,{ useState, useEffect }  from 'react';
import './App.css';
import Filters from "./components/Filter/Filter";
import Header from './components/Header/Header';
import FoodList from './components/FoodList/FoodList';

import OrderSummary from './components/OrderSummary/OrderSummary';

import { filters, menuItemsData, OrderItems } from "./utils"; 

const App = () => {
  const [preferenceFilter, setPreferenceFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  const [availabilityFilter, setAvailabilityFilter] = useState("");
  const [menuItems, setMenuItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [orderItems, setOrderItems] = useState([]);

  // fetch available items
  useEffect(() => {
    setMenuItems(menuItemsData);
    setFilteredItems(menuItemsData);
    setOrderItems(OrderItems);
  }, []);

  useEffect(() => {
    const updatedItems = menuItems.filter((item) => {
    const priceRange = priceFilter ? priceFilter.split("-") : [];
    const matchesPrice = priceRange.length ? Number.parseInt(item.price) >= priceRange[0] && Number.parseInt(item.price) <= priceRange[1] : true;
    const matchesPreference = preferenceFilter ? (item.category === preferenceFilter) : true;
    const matchesSearch = searchFilter ? item.name.toLowerCase().includes(searchFilter.toLowerCase()) : true
    const matchesAvailability = Number.parseInt(item.quantity) > 0;
    return matchesPrice && matchesPreference && matchesSearch && matchesAvailability;
  });
      
      setFilteredItems(updatedItems);
  }, [preferenceFilter, priceFilter, searchFilter, availabilityFilter, setFilteredItems, menuItems]);

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
const addItem = (e, data) => {
      console.log(data);
      setOrderItems({
        name: data.name,
        quantity: data.quantity,
        price: data.price
    });
      console.log(orderItems);
    }
  

  return (
    <div className="App container">
      <div className="row">
      <Header/>
      <div className='col-md-12'>   
        <div className="container">
        <div className="row">   
        <Filters filters={filters} values={values} methods={methods}/>
        <FoodList addItem={addItem} foodData={filteredItems}/>
        <OrderSummary/>
        </div>  
        </div>  
      </div>
    </div>
    </div>
  );
}

export default App;
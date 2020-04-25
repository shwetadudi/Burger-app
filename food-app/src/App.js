import React,{ useState, useEffect }  from 'react';
import './App.css';
import Filters from "./components/Filter/Filter";
import Header from './components/Header/Header';
import FoodList from './components/FoodList/FoodList';

import OrderSummary from './components/OrderSummary/OrderSummary';

import { filters, menuItemsData} from "./utils"; 

const App = () => {
  const [preferenceFilter, setPreferenceFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  const [availabilityFilter, setAvailabilityFilter] = useState("");
  const [menuItems, setMenuItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [orderItems, setOrderItems] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalNames, settotalNames] = useState(0);
  const [timeRemaining, settimeRemaining] = useState(0);

  // fetch available items
  useEffect(() => {
    setMenuItems(menuItemsData);
    setFilteredItems(menuItemsData);
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
  let cartItems = {...orderItems};
  if (cartItems[data.id]) {
    cartItems[data.id].quantity++;
  } else {
    cartItems[data.id] = {
      id: data.id,
      price: data.price,
      name: data.name,
      quantity: 1
    }
  }
  setOrderItems(cartItems);
  const totalPrice = Object.keys(cartItems).map(key => parseInt(cartItems[key].price)*parseInt(cartItems[key].quantity)).reduce((a,b) => a+b)
  const allItems = Object.keys(cartItems).map(key => cartItems[key].name+' X '+cartItems[key].quantity).join(',')
  setTotalPrice(totalPrice);
  settotalNames(allItems);
  settimeRemaining(false);    
  }
  const orderSubmit = () => {
    settimeRemaining(true);    
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
        <OrderSummary orderData={orderItems} allItems={totalNames} totalPrice={totalPrice} orderSubmit={orderSubmit} timeRemaining={timeRemaining}/>
        </div>  
        </div>  
      </div>
    </div>
    </div>
  );
}

export default App;
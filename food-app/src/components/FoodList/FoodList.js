import React from 'react';

const FoodList = (props) => {
    const foodList = Object.keys(props.foodData).map(foodItems => <li className="list-group-item" key={props.foodData[foodItems].id}><strong>{props.foodData[foodItems].name} - </strong>{props.foodData[foodItems].currency} {props.foodData[foodItems].price} <button onClick={props.addItem} className="btn-add btn btn btn-outline-info btn-sm">ADD</button></li>);
    
    return(<div > <h5>Food Items</h5>
        <ul className="list-group list-group-flush">
            {foodList}
        </ul>
    </div>)
}

export default FoodList;
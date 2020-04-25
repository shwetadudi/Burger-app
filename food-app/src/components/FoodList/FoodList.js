import React from 'react';

const FoodList = (props) => {
    let foodList = null;
    let foodArr = [];
    if(props.foodData){
        Object.keys(props.foodData.menu).map(foodItems => {
            foodArr.push(props.foodData.menu[foodItems]);            
        });
        foodList = foodArr.map(item => {return(<li key={item.id}>{item.key}</li>)});
    }
    return(<div>
        <ul>
            {foodList}
        </ul>
    </div>)
}

export default FoodList;
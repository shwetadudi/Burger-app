import React from 'react';

const orderSummary = (props) => (
    <div className="col-md-3"><h5>Order Summary : </h5>
    <ul className="list-group list-group-flush">
        <li className="list-group-item">Name : {props.allItems} </li>
        <li className="list-group-item">Price : {props.totalPrice} </li>
        <li className="list-group-item">Discount Applied : 10% </li>
        <button disabled={props.timeRemaining} className="btn btn-info" onClick={props.orderSubmit}>Order Now</button><br/>
        {props.timeRemaining ? <p>Your Order will be delivered in 31 minutes!</p> : null}
    </ul>
    </div>    
)

export default orderSummary;
import React from 'react';

const orderSummary = (props) => (
    <div className="col-md-3"><h5>Order Summary : </h5>
    <ul className="list-group list-group-flush">
        <li className="list-group-item">Name : {props.name} </li>
        <li className="list-group-item">Price : {props.name} </li>
        <li className="list-group-item">Discount Applied : {props.discount} </li>
        <button className="btn btn-info" onClick={props.orderSubmit}>Order Now</button><br/>
        <p>Your Order will be delivered in {props.time} minutes!</p>
    </ul>
    </div>    
)

export default orderSummary;
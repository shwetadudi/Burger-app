import React, { Component } from 'react';
import FoodList from './components/FoodList/FoodList';
import axios from 'axios';

class Mainpage extends Component{
    
    addItem(event){
        console.log(event)
    }
    /*componentDidMount(){
        axios.get('http://demo4255042.mockable.io/getProducts').then(Response => {
            this.setState({loadedItems : Response.data})
        })
    }*/
    render(){
        return(
            <div className="col-md-6">
                <FoodList addItem={this.addItem} foodData={this.props.items}/>
            </div>            
        );
    }
}
export default Mainpage;
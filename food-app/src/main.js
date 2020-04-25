import React, { Component } from 'react';
import FoodList from './components/FoodList/FoodList';
import axios from 'axios';

class Mainpage extends Component{
    state = {
        loadedItems : null
    }
    componentDidMount(){
        axios.get('http://demo4255042.mockable.io/getProducts').then(Response => {
            this.setState({loadedItems : Response.data})
        })
    }
    render(){
        return(
            <div className="col-md-6">
                <FoodList foodData={this.state.loadedItems}/>
            </div>            
        );
    }
}
export default Mainpage;
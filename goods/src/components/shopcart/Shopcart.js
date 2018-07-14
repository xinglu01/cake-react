import React, { Component } from 'react';
import './shopcart.css';
import { View as Header } from '../header/';
import {AAA} from '../../server/index.js';
import axios from 'axios';

class Shopcart extends Component {
	
	componentDidMount(){
		axios.get(AAA)
    	.then((res)=>{
    		console.log(res)
      })
    	.catch((err)=>{
          console.log(err.status);
      })
	}
	
	render() {
		return (
			<div className="container">
        <Header />
        <div className="mainCenter">
        		我是购物车
        </div>
    	</div>
		);
		
	}
	
}

export default Shopcart ;
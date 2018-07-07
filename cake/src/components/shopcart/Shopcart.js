import React, { Component } from 'react';
import './shopcart.css';
import { View as Header } from '../header/';

class Shopcart extends Component {
	
	render() {
		
		return (
			<div className="container">
        <Header />
        <div className="mainCenter">
        	我是个人中心
        </div>
    	</div>
		);
		
	}
	
}

export default Shopcart ;
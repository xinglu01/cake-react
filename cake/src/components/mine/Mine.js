import React, { Component } from 'react';
import './mine.css';
import { View as Header } from '../header/';

class Mine extends Component {
	
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

export default Mine ;
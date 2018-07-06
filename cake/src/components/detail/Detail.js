import React, { Component } from 'react';
import './detail.css';
import { View as Header } from '../header/';

class Detail extends Component {
	
	render() {
		
		return (
			<div className="App">
      	<div className="container">
	        <Header />
	        <div className="mainCenter">
	        	我是详情页面
	        </div>
      	</div>
      </div>
		);
		
	}
	
}

export default Detail ;
import React, { Component } from 'react';
import './register.css';
import { View as Header } from '../header/';

class Register extends Component {
	
	render() {
		
		return (
			<div className="App">
      	<div className="container">
	        <Header />
	        <div className="mainCenter">
	        	我是注册页面
	        </div>
      	</div>
      </div>
		);
		
	}
	
}

export default Register ;
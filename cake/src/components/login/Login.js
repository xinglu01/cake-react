import React, { Component } from 'react';
import './login.css';
import { View as Header } from '../header/';

class Login extends Component {
	
	render() {
		
		return (
			<div className="App">
      	<div className="container">
	        <Header />
	        <div className="mainCenter">
	        	我是登录页面
	        </div>
      	</div>
      </div>
		);
		
	}
	
}

export default Login ;
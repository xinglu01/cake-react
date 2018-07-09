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
	        	<div className="input_box">
				    	<input type="text" className="login_input" name="userName" ref="userName" placeholder="用户名"/>
				    	<input type="password" className="login_input" name="pwd" ref="pwd" placeholder="密码"/>
				    	<div className="register_btn">快速注册</div>
				    </div>
	        </div>
      	</div>
      </div>
		);
		
	}
	
}

export default Register ;
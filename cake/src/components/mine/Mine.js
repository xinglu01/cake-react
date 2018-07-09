import React, { Component } from 'react';
import './mine.css';
import { View as Header } from '../header/';

class Mine extends Component {
	constructor(props){
		super(props)
		
		this.handelLogin = this.handelLogin.bind(this)
	}
	
	handelLogin(){
		this.props.history.push("/login")
	}
	
	render() {
		return (
			<div className="container">
        <Header />
        <div className="mainCenter">
        	<div className="mine_top">
        		<img src="http://s1.ymatou.com/homem/images/share_personal-9287711f0c.png" alt="" />
        		<b onClick={this.handelLogin}>请登录</b>
        	</div>
        </div>
    	</div>
		);
	}
}

export default Mine ;
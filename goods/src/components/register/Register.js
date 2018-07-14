import React, { Component } from 'react';
import './register.css';
import registerapi from '../../api/registerapi.js';

class Register extends Component {
	constructor(props){
		super(props)
		this.handelReg = this.handelReg.bind(this)
		this.handelback = this.handelback.bind(this)
	}
	
	handelReg(){
		const userID = this.refs.userID.value
		const password = this.refs.password.value
		registerapi.registerfn(userID,password,(data)=>{
			if(userID!==""&&data === 0){
				alert("该用户已注册，请直接登录")
				this.props.history.push('/login')
			}else if(data === 2){
				alert("注册失败，请重新注册")
			}else{
				alert("注册成功，即将跳转到登录页面")
				this.props.history.push('/login')
			}
		})
	}
	
	handelback(){
		this.props.history.push('/login')
	}
	
	render() {
		return (
			<div className="App">
      	<div className="container">
	        <header>
	        	<div onClick={this.handelback}>返回</div>
	        	<div className="topName">注册</div>
	        	<div><i className='iconfont icon-gouwuche'></i></div>
	        </header>
	        <div className="mainCenter">
	        	<div className="input_box">
				    	<input type="text" className="login_input" name="userID" ref="userID" placeholder="用户名"/>
				    	<input type="password" className="login_input" name="password" ref="password" placeholder="密码"/>
				      <button onClick={this.handelReg} className="register_btn" >快速注册</button>
				    </div>
	        </div>
      	</div>
      </div>
		);
	}
}

export default Register ;
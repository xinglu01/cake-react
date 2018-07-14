import React, { Component } from 'react';
import './login.css';
import loginapi from '../../api/loginapi.js';

class Login extends Component {
	constructor(props){
		super(props)
		
		this.handelLog = this.handelLog.bind(this)
		this.handelReg = this.handelReg.bind(this)
		this.handelback = this.handelback.bind(this)
	}
	
	handelLog(){
		const userID = this.refs.userID.value
		const password = this.refs.password.value
		loginapi.loginfn(userID,password,(data)=>{
			if(userID!==""&&data === 0){
				alert("用户名不存在,请先注册")
			}else if(data === 2){
				alert("用户名密码不符,请重新输入")
			}else{
				alert("登录成功，即将跳转")
				this.props.history.push({
					pathname :'/shopcart',
					state :{
						flag :'/mine'
					}
				})
			}
		})
	}
	
	handelReg(){
		this.props.history.push('/register')
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
	        	<div className="topName">登录</div>
	        	<div><i className='iconfont icon-gouwuche'></i></div>
	        </header>
	        <div className="mainCenter">
	        	<div className="input_box">
				    	<input type="text" className="login_input" name="userID" ref="userID" placeholder="用户名"/>
				    	<input type="password" className="login_input" name="password" ref="password" placeholder="密码"/>
				    	<div className="login_btn" onClick={this.handelLog}>点击登录</div>
				    	<div className="register_btn" onClick={this.handelReg}>快速注册</div>
				    </div>
	        </div>
      	</div>
      </div>
		);
		
	}
	
}

export default Login ;
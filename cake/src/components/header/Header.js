import React, { Component } from 'react';
import './header.css';

class Header extends Component {
	constructor(props){
		super(props)
		
		this.handelgoCart = this.handelgoCart.bind(this)
	}
	
	handelgoCart(){
		console.log(this.props)
	}
	
	render() {
		return (
			<div className="headMain">
				<ul className="headUl">
					<li className="fristLi">
						<i className="iconfont icon icon-jiantou3"></i>
					</li>
					<li className="centerLi">
						<img src={require("../../asstic/imgs/logo.png")} alt="" />
					</li>
					<li className="lastLi">
						<i className="iconfont icon icon-liaotian"></i>
						<i className="iconfont icon icon-gouwuche1" onClick={this.handelgoCart}></i>
					</li>
				</ul>
			</div>
		);
	}
	
}

export default Header ;
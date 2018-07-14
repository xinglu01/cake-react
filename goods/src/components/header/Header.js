import React, { Component } from 'react';
import './header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
	constructor(props){
		super(props)
	}
	
	render() {
		return (
			<div className="headMain">
				<ul className="headUl">
					<li className="fristLi">
						<i className="iconfont icon icon-fenlei"></i>
					</li>
					<li className="centerLi">
						<img src={require("../../asstic/imgs/logo.png")} alt="" />
					</li>
					<li className="lastLi">
						<i className="iconfont icon icon-liaotian"></i>
						<Link to="/shopcart"><i className="iconfont icon icon-gouwuche1"></i></Link>
					</li>
				</ul>
			</div>
		);
	}
	
}

export default Header ;
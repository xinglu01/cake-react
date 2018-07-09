import React, { Component } from 'react';
import './header.css';

class Header extends Component {
	
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
						<i className="iconfont icon icon-gouwuche1"></i>
					</li>
				</ul>
			</div>
		);
	}
	
}

export default Header ;
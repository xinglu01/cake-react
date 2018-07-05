import React, { Component } from 'react';
import './header.css';



class Header extends Component {
	
	render() {
		
		return (
			<div className="headMain">
				<ul>
					<li className="fristLi">
						<i className="iconfont icon-fenlei" ></i>
						<i className="iconfont icon-dingwei"></i>
						<span>上海</span>
					</li>
					<li className="centerLi">
						<img src="http://static.21cake.com/themes/wap/img/logo.png" alt="" />
					</li>
					<li className="lastLi">
						<i className="iconfont icon-liaotian"></i>
						<i className="iconfont icon-gouwuche1"></i>
					</li>
				</ul>
				
			</div>
		);
		
	}
	
	
}

export default Header ;
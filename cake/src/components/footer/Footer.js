import React, { Component } from 'react';
import './footer.css';
import Classify from '../classify/Classify';
import Home from '../home/Home';
import Mine from '../mine/Mine';


class Footer extends Component {
	
	render() {
		
		return (
			<div className="footMain">
				<div  className="footDiv">
					<i className="iconfont icon-shouye"></i>
					<span>首页</span>
				</div>
				<div className="footDiv">
					<i className="iconfont icon-fenlei1"></i>
					<span>分类</span>
				</div>
				<div className="footDiv">
					<i className="iconfont icon-geren"></i>
					<span>个人</span>
				</div>
			</div>
		);
		
	}
	
	
}

export default Footer ;
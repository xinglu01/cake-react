import React, { Component } from 'react';
import './footer.css';
import Classify from '../classify/Classify';
import Home from '../home/Home';
import Mine from '../mine/Mine';


class Footer extends Component {
	
	render() {
		
		return (
			<div className="footMain">
				<div>
					<i className="iconfont icon-shouye"></i>
					<p>首页</p>
				</div>
				<div>
					<i className="iconfont icon-fenlei1"></i>
					<p>分类</p>
				</div>
				<div>
					<i className="iconfont icon-geren"></i>
					<p>个人</p>
				</div>
			</div>
		);
		
	}
	
	
}

export default Footer ;
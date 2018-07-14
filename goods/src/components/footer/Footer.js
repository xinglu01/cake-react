import React, { Component } from 'react';
import './footer.css';
import { Link } from 'react-router-dom';


class Footer extends Component {
	
	render() {
		
		return (
			<div className="footMain">
				<div  className="footDiv">
					<Link to="/home" className="footLink">	
						<i className="iconfont icon-shouye"></i>
						<span>首页</span>
					</Link>	
				</div>
				
				<div className="footDiv">
					<Link to="/classify/5" className="footLink">
						<i className="iconfont icon-fenlei1"></i>
						<span>分类</span>
					</Link>	
				</div>
				
				<div className="footDiv">
					<Link to="/mine" className="footLink">
						<i className="iconfont icon-geren"></i>
						<span>个人</span>
					</Link>	
				</div>
			</div>
		);
		
	}
	
	
}

export default Footer ;
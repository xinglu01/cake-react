import React, { Component } from 'react';
import './classify.css';
import { View as Header } from '../header/';
import classify from '../../api/classify.js';
import { Link } from 'react-router-dom';
import '../home/home.css';

class Classify extends Component {
	constructor(props){
		super(props)
		this.state = {
			classifyList : [],
			kindList :[]
		}
	}
	
	componentDidMount(){
		classify.getData( (res)=>{
			const list = res.data
			this.setState({
				classifyList : list
			})
		})
		
		const {classID} = this.props.match.params
		classify.getKindData(classID,(data)=>{
			this.setState({
				kindList : data
			})
		})
	}
	
	componentWillReceiveProps(nextProps){
		const {classID} = nextProps.match.params
		classify.getKindData(classID,(data)=>{
			this.setState({
				kindList : data
			})
		})
	}
	
	render() {
		var menuItem2 = [];
		if( this.state.kindList!=0) {
			this.state.kindList.map((item,index)=>{
    		menuItem2.push(
      		<li className="homeList" key={item.goodsID}>
			    	<Link to={"/detail/"+ item.goodsID} className="homeA">
			    		<img src = { item.goodsListImg } alt="" />
			    	</Link>
			    	<div className="listInfo">    
				    	<Link to={"/detail/"+ item.goodsID} className="listInfo_one">    
						    <div className="title">{item.goodsName}</div> 
						    <div className="price">{item.price}元</div>
					    	<div className="titleAll">{item.discount}</div>
				    	</Link>
				    	<span className="char_icon">
				    		<i className="iconfont icon-gouwuche"></i> 
				    	</span>    
			    	</div>    
			    </li>
    		)
    	})
		}else{
			menuItem2 = '暂时没有数据'
		}
		
		return (
			<div className="container">
        <Header />
        <div className="mainCenter">
        	<div className="ul-box">
	        	<ul className="classifyUl">
	        		{
	        			this.state.classifyList.map((item,index)=>{
	        				return (
	        					<li key={item.classID}>
	        						<Link to={"/classify/"+ item.classID}>{item.className}</Link>
	        					</li>
	        				)
	        			})
	        		}
	        	</ul>
        	</div>
        	<ul className="homeUl">
        		{menuItem2}
        	</ul>
        </div>
    	</div>
		);
		
	}
	
}

export default Classify ;
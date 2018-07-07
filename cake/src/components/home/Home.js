import React, { Component } from 'react';
import './home.css';
import { View as Header } from '../header/';
import { Carousel } from 'antd-mobile';
import FetchJsonp from 'fetch-jsonp';
import { Link } from 'react-router-dom';
import { HOME_LIST_URL , HOME_HOT_GOODS } from '../../server/'

class Home extends Component {
	constructor(props){
		super(props)
		this.state = {
    	imgHeight: 176,
			data: [],
			list : [],
			hotList : []
		}
	}
	
	
	
	componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: ['G02/M0A/3A/B6/CgvUBVs_BJiALTTkAADPaZIt31Q879_15_8_o','G02/M0B/15/CB/CgvUA1s58ECARlIrAAD4-6_xwZQ110_15_8_w_o','G02/M02/2E/B5/CgvUA1s99_eAWW_PAAC0gXp5GLQ771_15_8_o','G02/M04/34/40/CgvUA1s-_U-AQ7aZAADnc2_K9fg079_15_8_o', 'G02/M06/3D/59/CgvUBFs_oPaAWnhPAACxV5-wAGc622_15_8_o'],
      });
    }, 1000)
    
    FetchJsonp(HOME_LIST_URL,{
      jsonpCallback: 'callback',
      timeout: 10000 })
	    .then((res) => {return res.json()})
	    .then((data) => {
	      this.setState({
	        list: data
	      })
	    })
	    .catch((err) => {console.log(err)})
	    
	  
  }
	
	render() {
		const menuItem =
    	this.state.list.map((item,index)=>{
    		return(
      		<li className="homeList" key={item.goodsID}>
			    	<Link to={"/detail"+ item.goodsID} className="homeA">
			    		<img src = { item.goodsListImg } alt="" />
			    	</Link>
			    	<div className="listInfo">    
				    	<Link to={"/detail"+ item.goodsID} className="listInfo_one">    
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
		return (
			<div className="container">
        <Header />
        <div className="mainCenter">
      	 	<Carousel autoplay={true} infinite>
	        	{this.state.data.map(val => (
	            <a
	              key={val}
	              href="javascript:;"
	              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}>
	              <img
	                src={`http://pic1.ymatou.com/${val}.jpg`}
	                alt=""
	                style={{ width: '100%', verticalAlign: 'top' }}
	                onLoad={() => {
	                  window.dispatchEvent(new Event('resize'));
	                  this.setState({ imgHeight: 'auto' });
	                }} 
	              />
	          	</a>
	        	))}
        	</Carousel>
        	<ul className="rights-box">
            <li>123</li>
          </ul>
          <ul className="homeUl" >
						{menuItem}
					</ul>
        </div>
    	</div>
		);		
	}
	
}

export default Home ;
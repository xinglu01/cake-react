import React, { Component } from 'react';
import './home.css';
import { View as Header } from '../header/';
import { Carousel } from 'antd-mobile';
import FetchJsonp from 'fetch-jsonp';
import { Link } from 'react-router-dom';
import { HOME_LIST_URL , HOME_HOT_GOODS } from '../../server/';
import axios from 'axios';

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
        data: ['M02/2F/07/CgvUA1s-A1-AQijMAAD1Ff1tni4925_15_8_o','M04/4C/34/CgvUBFtDEPGAS1R4AADhDIZ5O3A120_15_8_o','M0A/4E/37/CgvUBFtDVYOANA71AADScI-uqMQ874_15_8_o','M04/44/79/CgvUA1tCNwWAL-RaAAEVHtBYLTU556_15_8_o'],
      });
    }, 500)
    
    FetchJsonp(HOME_LIST_URL,{
      jsonpCallback: 'callback',
      timeout: 8000 })
	    .then((res) => {return res.json()})
	    .then((data) => {
	      this.setState({
	        list: data
	      })
	    })
	    .catch((err) => {console.log(err)})
	    
    axios.get(HOME_HOT_GOODS)
    	.then((res)=>{
          const hotData = res.data.data.goods
          this.setState({
          	hotList : hotData
          })
      })
    	.catch((err)=>{
          console.log(err.status);
      })
  }
	
	render() {
		const menuItem =
    	this.state.list.map((item,index)=>{
    		return(
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
    	
  	const menuItem2 =
    	this.state.hotList.map((item,index)=>{
    		return(
      		<li key={item.goods_id}>
          	<Link to={"classify/"+item.is_jump} className="hotLink">
          		<img src={item.pic_url} alt="" />
  						<div className="hotDiv">
    						<span>{item.title}</span>
  						</div>
          	</Link>
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
	                src={`http://pic1.ymatou.com/G02/${val}.jpg`}
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
        	<div className="top-box">
	        	<ul className="topList">
	            {menuItem2}
	          </ul>
          </div>
          <ul className="homeUl" >
						{menuItem}
					</ul>
        </div>
    	</div>
		);		
	}
	
}

export default Home ;
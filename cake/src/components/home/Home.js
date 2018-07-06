import React, { Component } from 'react';
import './home.css';
import { View as Header } from '../header/';
import { Carousel } from 'antd-mobile';
import FetchJsonp from 'fetch-jsonp';

class Home extends Component {
	constructor(props){
		super(props)
		this.state = {
    	imgHeight: 176,
			data: [],
			list1 : [],
			list2 : [],
			list3 : []
		}
		this.handelDataSuccess = this.handelDataSuccess.bind(this)
	}
	
	getData () {
    FetchJsonp('https://api.21cake.com/?method=Advertisement.showV2&v=1.0&cityId=2&position=home_top%2Ctips%2Cclassification%2Chome_floor_v2%2Cactivity%2Cmagazine&channel=wap&_=1530863296602&callback=Zepto1530863296490')
        .then((res) => {return res.json()})
        .then((data) => { this.handelDataSuccess(data) } )
        .catch((err) => {console.log(err)})
  }
	
	componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: ['cf4db0e0c4a15b350a377243bfb87ede', 'de7f5cade140bd0c5a49cb853b8249f1', '38511b0b3ee49c0db7a0e9316c2e91db'],
      });
    }, 1000);
		this.getData()
  }
	
	handelDataSuccess(data){
		const dataAll = data.data
		const productData = dataAll[3].data[0].contents
		const PopularData = dataAll[3].data[1].contents
		const birthdayData = dataAll[3].data[2].contents
		this.setState({
			list1 : productData,
			list2 : PopularData,
			list3 : birthdayData
		})
	}
	
	render() {
		const menuItem1 =
    	this.state.list1.map((item,index)=>{
    		return(
    			<ul className="homeUl" key={item.productId}>
        		<li className="homeList">
				    	<a href="javascript:;" className="homeA">
				    		<img src={['http://static.21cake.com/' + item.imageUrl]} alt="" />
				    	</a>
				    	<div className="listInfo">    
					    	<a href="javascript:;">    
						    	<h4>
							    	<span className="title">{item.name}</span> 
							    	<span className="price">{item.price}</span>
							    	<span className="bang">元/{item.spec}</span>
						    	</h4>    
						    	<div className="titleAll">{item.description}</div>
					    	</a>
					    	<span className="char_icon">
					    		<i className="iconfont icon-gouwuche"></i> 
					    	</span>    
				    	</div>
				    </li>
        	</ul>
    		)
    	})
    	const menuItem2 =
    	this.state.list2.map((item,index)=>{
    		return(
    			<ul className="homeUl" key={item.productId}>
        		<li className="homeList">
				    	<a href="javascript:;" className="homeA">
				    		<img src={['http://static.21cake.com/' + item.imageUrl]} alt="" />
				    	</a>
				    	<div className="listInfo">    
					    	<a href="javascript:;">    
						    	<h4>
							    	<span className="title">{item.name}</span> 
							    	<span className="price">{item.price}</span>
							    	<span className="bang">元/{item.spec}</span>
						    	</h4>    
						    	<div className="titleAll">{item.description}</div>
					    	</a>
					    	<span className="char_icon">
					    		<i className="iconfont icon-gouwuche"></i> 
					    	</span>    
				    	</div>
				    </li>
        	</ul>
    		)
    	})
    	const menuItem3 =
    	this.state.list3.map((item,index)=>{
    		return(
    			<ul className="homeUl" key={item.productId}>
        		<li className="homeList">
				    	<a href="javascript:;" className="homeA">
				    		<img src={['http://static.21cake.com/' + item.imageUrl]} alt="" />
				    	</a>
				    	<div className="listInfo">    
					    	<a href="javascript:;">    
						    	<h4>
							    	<span className="title">{item.name}</span> 
							    	<span className="price">{item.price}</span>
							    	<span className="bang">元/{item.spec}</span>
						    	</h4>    
						    	<div className="titleAll">{item.description}</div>
					    	</a>
					    	<span className="char_icon">
					    		<i className="iconfont icon-gouwuche"></i> 
					    	</span>    
				    	</div>
				    </li>
        	</ul>
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
	                src={`http://static.21cake.com//upload/images/${val}.jpg`}
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
            <li>
            	<i className="new-home-icon"></i>新人首单赠小切块
            </li>
            <li>
            	<i className="new-home-icon"></i>满百包邮
            </li>
            <li>
            	<i className="new-home-icon"></i>千万用户选择
            </li>
          </ul>
					{menuItem1}
					{menuItem2}
					{menuItem3}
        </div>
    	</div>
		);		
	}
	
}

export default Home ;
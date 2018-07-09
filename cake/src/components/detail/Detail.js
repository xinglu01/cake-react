import React, { Component } from 'react';
import './detail.css';
import { View as Header } from '../header/';
import FetchJsonp from 'fetch-jsonp';
import { Carousel } from 'antd-mobile';


class Detail extends Component {
	constructor(props){
		super(props)
		this.state = {
    	imgHeight: 176,
			data: []
		}
	}
	
	componentDidMount() {
		setTimeout(() => {
      this.setState({
        data: ['d35171b84c2cc8a695d71545387588bf','a328cb09dc6e7b230ded8e5bd9116f6a','f5c184a98afac9e350304232c69b2bc5'],
      });
    }, 2000);
	}
	
	render() {
		return (
			<div className="App">
      	<div className="container">
	        <Header />
	        <div className="mainCenter">
	        	<Carousel autoplay={true} infinite >
		          {this.state.data.map(val => (
		            <a
		              key={val}
		              href="javascript:;"
		              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}>
		              <img
		                src={`https://static.21cake.com//upload/images/${val}.jpg`}
		                alt=""
		                style={{ width: '100%', verticalAlign: 'top' }}
		                onLoad={() => {
		                  // fire window resize event to change height
		                  window.dispatchEvent(new Event('resize'));
		                  this.setState({ imgHeight: 'auto' });
		                }}
		              />
		            </a>
		          ))}
		        </Carousel>
	        </div>
      	</div>
      	<footer><button className="add_cart">加入购物车</button></footer>
      </div>
		);	
	}
	
}

export default Detail ;
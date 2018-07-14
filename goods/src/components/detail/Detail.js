import React, { Component } from 'react';
import './detail.css';
import { View as Header } from '../header/';
import detailapi from '../../api/detailapi.js';


class Detail extends Component {
	constructor(props){
		super(props)
		this.state = {
			data : []
		}
	}
	
	componentDidMount() {
    const { id } = this.props.match.params
    detailapi.getData(id,(data)=>{
    	const one = data
    	this.setState({
    		data : one
    	})
    })
	}
	
	render() {
		const imgData = 
			this.state.data.map( (item,index) => { 
				return( <div key="item.goodsID">
									<img src={item.goodsListImg} className="detail_banner" alt=""/>
									<div className="detail_name">{item.goodsName}</div>
									<div className="detail_data">{item.detail}</div>
								</div> );
			})
			
		return (
			<div className="App">
      	<div className="container">
	        <Header />
	        <div className="mainCenter">
	        	{imgData}
	        </div>
      	</div>
      	<footer><button className="add_cart">加入购物车</button></footer>
      </div>
		);	
	}
	
}

export default Detail ;
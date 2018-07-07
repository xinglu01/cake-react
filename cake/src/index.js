import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './reset.css';
import 'antd/dist/antd.css';
import ErrorBoundary from './ErrorBoundary.js';
import Detail from './components/detail/Detail.js';
import Register from './components/register/Register.js';
import Login from './components/login/Login.js';
import { HashRouter as Router , Route , Switch } from 'react-router-dom';


ReactDOM.render(
	<ErrorBoundary>
		<Router>
			<Switch>
				<Route path="/detail/:id" component = { Detail } />
				<Route path="/login" component = { Login } />
				<Route path="/register" component = { Register } />
				<Route path="/" component = { App } />
			</Switch>
		</Router>
	</ErrorBoundary>, 
	document.getElementById('root')
);

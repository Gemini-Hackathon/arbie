import React from 'react';
import {
	BrowserRouter,
	Link
	} from 'react-browser-router';
import './nav.css';

import logo from  './arbieLogo.png'

export default function Navigation() {
	return (
		<BrowserRouter>
			<div className="header-container">
				
				<h1 className="title"><img className="logo" alt="logo" src={logo} />Arbie</h1>
				<div style={{flex:1}}/>
				<div className="link_wrapper">
					<Link className="link" to="/home">About Arbie</Link>
					<Link className="link" to="/">Trading Tip</Link>
					<Link className="link" to="/team">Meet the Team</Link>
				</div>
				
			</div>
		</BrowserRouter>
	);
}
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.sass";

import Navbar from "./Components/AllSections/Navbar/Navbar";
import HomePage from "./Components/Pages/HomePage";
import ContactPage from "./Components/Pages/ContactPage";
import Footer from './Components/AllSections/Footer/Footer'

class App extends Component {
	render() {
		return (
			<div className="App">
				<BrowserRouter>
				<Navbar />
				<Route exact path="/" component={HomePage} />
				<Route path="/Contact" component={ContactPage} />
				<Footer />
				</BrowserRouter>
			</div>
		);
	}
}

export default App;


/*

  1 - npm install node-sass axios styled react-router-dom --save
  2- npm add bootstrap react-bootstrap

*/

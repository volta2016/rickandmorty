// import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "components/layout";
import HomePage from "pages/home";
import CharacterDetails from "pages/characterDetails";
import About from "pages/About";
import { withCounter } from "hoc";

import "styles/global.css";

const App = ({ counter, increment, decrement, nameApp }) => (
	<BrowserRouter>
		<Layout>
			<p>
				<b>{nameApp}</b> - Suma o Resta al valor inicial
				<span role="img" aria-label="smile">
					😄 ⚛️
				</span>
				<span className="count"> {counter} </span>
			</p>
			<div>
				<button className="plus" onClick={increment}>
					+1
				</button>
				<button className="subtract" onClick={decrement}>
					-1
				</button>
			</div>

			<Switch>
				<Route path="/" exact component={HomePage}></Route>
				<Route path="/about" component={About}></Route>
				<Route path="/:id" component={CharacterDetails}></Route>
			</Switch>
		</Layout>
	</BrowserRouter>
);

export default withCounter(App);
//de general a especifico
//BrowserRouter es un contexto

import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import style from './App.module.css';

import Header from '../Header';
import Footer from '../Footer';

import Home from '../../pages/Home';
import Characters from '../../pages/Characters';
import Episodes from '../../pages/Episodes';
import Locations from '../../pages/Locations';
import WatchList from '../../pages/WatchList';

import routes from '../../routes';

const App = () => (
	<BrowserRouter>
		<div className={style.App}>
			<Header />
			<Switch>
				<Route exact path={routes.HOME} component={Home} />
				<Route path={routes.CHARACTERS} component={Characters} />
				<Route path={routes.EPISODES} component={Episodes} />
				<Route path={routes.LOCATIONS} component={Locations} />
				<Route path={routes.WATCHLIST} component={WatchList} />
				<Redirect to="/" />
			</Switch>
			<Footer />
		</div>
	</BrowserRouter>
);

export default App;

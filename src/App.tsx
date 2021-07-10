import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar, Footer, ScrollToTop } from "./components";
import {
	TempSplashPage, HomePage,
	SearchPage,
	ExplorePage,
	ContributePage
} from "./views";

function App() {
	return (
		<BrowserRouter basename="/">
			<ScrollToTop>
				<Route path="/" exact component={TempSplashPage} />
				{/*
				TODO: disable while under active development
				<Navbar />
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route path="/search" exact component={SearchPage} />
					<Route path="/explore" exact component={ExplorePage} />
					<Route path="/contribute" exact component={ContributePage} />
				</Switch>
				<Footer /> */}
			</ScrollToTop>
		</BrowserRouter>
	);
}

export default App;

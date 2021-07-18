import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar, Footer, ScrollToTop } from "./components";
import TermsOfService from "./components/Terrms";
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
				{/* TODO: disable while under active development */}
				{/* <Route path="/" exact component={TempSplashPage} /> */}
				<Navbar />
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route path="/search" exact component={SearchPage} />
					<Route path="/explore" exact component={ExplorePage} />
					<Route path="/contribute" exact component={ContributePage} />
					<Route path="/tos" exact component={TermsOfService} />
				</Switch>
				<Footer />
			</ScrollToTop>
		</BrowserRouter>
	);
}

export default App;

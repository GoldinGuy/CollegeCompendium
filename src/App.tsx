import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar, Footer, ScrollToTop } from "./components";
import { HomePage, LatestPage, SearchPage, ExplorePage } from "./views";

function App() {
	return (
		<BrowserRouter basename="/">
			<ScrollToTop>
				<Navbar />
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route path="/search:term" exact component={SearchPage} />
					<Route path="/explore" exact component={ExplorePage} />
					<Route path="/contribute" exact component={LatestPage} />
				</Switch>
				<Footer />
			</ScrollToTop>
		</BrowserRouter>
	);
}

export default App;

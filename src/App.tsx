import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar, Footer, ScrollToTop } from "./components";
import { HomePage, LatestPage, NewsPage, ExplorePage } from "./views";

function App() {
	return (
		<BrowserRouter basename="/">
			<ScrollToTop>
				<Navbar />
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route path="/latest" exact component={LatestPage} />
					<Route path="/news" exact component={NewsPage} />
					<Route path="/explore" exact component={ExplorePage} />
				</Switch>
				<Footer />
			</ScrollToTop>
		</BrowserRouter>
	);
}

export default App;

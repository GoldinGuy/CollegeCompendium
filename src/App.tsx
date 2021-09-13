/*  College Compendium Component File
Copyright (C) 2021 Seth Goldin & Samuel Crombie
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version. 
You may not use your own version of this program commerically.
This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.
You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
You can contact us for more details at team@collegecompendium.org. */

import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { Navbar, Footer, ScrollToTop } from "./components";
import TermsOfService from "./components/Terms";
import { Class } from "./typings/interfaces";
import useGA from "./hooks/useGA";
import {
	// TempSplashPage,
	HomePage,
	SearchPage,
	ExplorePage,
	SubmitPage,
} from "./views";

function App() {
	const [classes, setClasses] = useState<Class[]>([]);
	const [featured, setFeatured] = useState<Class[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// console.log(process.env.REACT_APP_JSONIO_API_KEY);
		if (featured.length === 0) {
			const locF = localStorage.getItem("featured");
			if (locF && typeof locF === "string") {
				setFeatured(JSON.parse(locF));
			} else if (
				process.env.REACT_APP_JSONIO_API_KEY &&
				process.env.REACT_APP_FEATURED_JSON_ID
			) {
				let fReq = new XMLHttpRequest();
				fReq.onreadystatechange = () => {
					if (fReq.readyState === XMLHttpRequest.DONE) {
						// console.log(cReq.responseText);
						if (fReq.status === 200) {
							setFeatured(JSON.parse(fReq.responseText));
							localStorage.setItem("featured", fReq.responseText);
						}
					}
				};
				fReq.open(
					"GET",
					`https://api.jsonbin.io/v3/b/${process.env.REACT_APP_FEATURED_JSON_ID}/latest`,
					true
				);
				fReq.setRequestHeader(
					"X-Master-Key",
					`${process.env.REACT_APP_JSONIO_API_KEY}`
				);
				fReq.setRequestHeader("X-Bin-Meta", "false");
				fReq.send();
			}
		}
		if (classes.length === 0) {
			const locC = localStorage.getItem("classes");
			if (locC && typeof locC === "string") {
				setClasses(JSON.parse(locC));
			} else if (
				process.env.REACT_APP_JSONIO_API_KEY &&
				process.env.REACT_APP_CLASSES_JSON_ID
			) {
				let cReq = new XMLHttpRequest();
				cReq.onreadystatechange = () => {
					if (cReq.readyState === XMLHttpRequest.DONE) {
						// console.log(cReq.responseText);
						if (cReq.status === 200) {
							setClasses(JSON.parse(cReq.responseText));
							localStorage.setItem("classes", cReq.responseText);
						}
					}
				};
				cReq.open(
					"GET",
					`https://api.jsonbin.io/v3/b/${process.env.REACT_APP_CLASSES_JSON_ID}/latest`,
					true
				);
				cReq.setRequestHeader(
					"X-Master-Key",
					`${process.env.REACT_APP_JSONIO_API_KEY}`
				);
				cReq.setRequestHeader("X-Bin-Meta", "false");
				cReq.send();
			}
		}
		if (classes.length > 0 && featured.length > 0) {
			setLoading(false);
		}
	}, [classes.length, featured.length]);

	// analytics
	useGA();

	return (
			<ScrollToTop>
				{/* TODO: enable while under active development */}
				{/* <Route path="/" exact component={TempSplashPage} /> */}
				<Navbar />
				<Switch>
					<Route
						path="//"
						render={() => <HomePage featured={featured} loading={loading} />}
					/>
					<Route
						path="/search"
						render={() => <SearchPage classes={classes} loading={loading} />}
					/>
					<Route
						path="/explore"
						render={() => <ExplorePage classes={classes} loading={loading} />}
					/>
					<Route path="/submit" exact component={SubmitPage} />
					<Route path="/tos" exact component={TermsOfService} />
				</Switch>
				<Footer />
			</ScrollToTop>
	);
}

export default App;

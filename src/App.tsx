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
import TermsOfService from "./components/info/Terms";
import { Class, Textbook } from "./typings/interfaces";
import posthog from "posthog-js";
import {
	// TempSplashPage,
	HomePage,
	SearchPage,
	ExplorePage,
	SubmitPage,
} from "./views";
import { JSON_DATA_VERSION } from "./globals";

// analytics
if (!window.location.href.includes('127.0.0.1') && process.env.REACT_APP_PH_ID) {
	posthog.init(process.env.REACT_APP_PH_ID, {
		api_host: "https://app.posthog.com",
		persistence: 'memory'
	});
}

function App() {
	const [classes, setClasses] = useState<Class[]>([]);
	const [featured, setFeatured] = useState<Class[]>([]);
	const [textbooks, setTextbooks] = useState<Textbook[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (featured.length === 0 || classes.length === 0 || textbooks.length === 0) {
			const locData = localStorage.getItem("compendium");
			if (locData && typeof locData === "string" && JSON.parse(locData).version === JSON_DATA_VERSION) {
				const locJSONData = JSON.parse(locData);
				setFeatured(locJSONData["featured"]);
				setClasses(locJSONData["courses"]);
				setTextbooks(locJSONData["textbooks"]);
			} else if (
				process.env.REACT_APP_JSONIO_API_KEY &&
				process.env.REACT_APP_DATA_ID
			) {
				let fReq = new XMLHttpRequest();
				fReq.onreadystatechange = () => {
					if (fReq.readyState === XMLHttpRequest.DONE) {
						if (fReq.status === 200) {
							const data = JSON.parse(fReq.responseText);
							setFeatured(data['featured']);
							setClasses(data['courses']);
							setTextbooks(data['textbooks']);
							localStorage.setItem("compendium", fReq.responseText);
						}
					}
				};
				fReq.open(
					"GET",
					`https://api.jsonbin.io/v3/b/${process.env.REACT_APP_DATA_ID}/latest`,
					true
				);
				fReq.setRequestHeader(
					"X-Master-Key",
					`${process.env.REACT_APP_JSONIO_API_KEY}`
				);
				fReq.setRequestHeader("X-Bin-Meta", "false");
				fReq.send();
				// clean up old data caches - TODO: remove in future versions
				if (localStorage.getItem("classes")) {
					localStorage.removeItem("classes");
				}
				if (localStorage.getItem("featured")) {
					localStorage.removeItem("featured");
				}
			}
		}
		if (classes.length > 0 && featured.length > 0) {
			setLoading(false);
		}
	}, [classes.length, featured.length, textbooks.length]);

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

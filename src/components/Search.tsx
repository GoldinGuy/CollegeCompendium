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

import React from "react";
import { useHistory } from "react-router-dom";
import { useQuery } from "../utils";
import ReactGA from "react-ga"

const NavSearchBar = ({ classN }: { classN?: string }) => {
	const [term, setTerm] = React.useState("");

	const history = useHistory();
	let query = useQuery();

	const inputKeyDown = async (e: any) => {
		if (e.key === "Enter") {
			search(term);
		} else {
			const newQuery = e.target.value;
			setTerm(newQuery);
		}
	};

	const search = (term: string) => {
		let searchTerm = term.toLowerCase().trim().replaceAll(" ", "-");

		if (searchTerm.length > 0) {
			ReactGA.event({
				category: "searching",
				action: "searched-resources",
				label: term,
			});
			history.push(
				`/search?q=${searchTerm}${
					query.get("table") === "true" ? "&table=true" : ""
				}`
			);
			setTerm("");
		}
	};

	return (
		<div className={`flex ${classN ?? ""}`}>
			<div className="w-1/2 mx-auto my-0 text-gray-500">
				<section className="flex items-center justify-center sm:h-20">
					<div
						className="flex items-center justify-center w-1/2"
						role="search"
						aria-label="Sitewide"
					>
						<label htmlFor="search" className="sr-only">
							Search Classes
						</label>
						<input
							maxLength={25}
							type="text"
							id="search-nav"
							value={term}
							onChange={inputKeyDown}
							onKeyUp={inputKeyDown}
							placeholder="Search"
							spellCheck="false"
							className="px-6 py-2 -mr-8 font-sans transition-colors duration-300 transform bg-gray-200 border-none rounded-full focus:outline-none focus:bg-gray-300"
						/>
						<button
							className="transform border-none focus:border-0 focus:outline-none"
							aria-label="Submit"
							onClick={() => search(term)}
						>
							<svg
								className={`text-gray-500 duration-200 fill-current hover:text-gray-700 focus:text-gray-700 ${
									classN ?? ""
								}`}
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								width={20}
								height={20}
								viewBox="0 0 20 20"
							>
								<title>Search Classes</title>
								<path d="M17.545 15.467l-3.779-3.779c0.57-0.935 0.898-2.035 0.898-3.21 0-3.417-2.961-6.377-6.378-6.377s-6.186 2.769-6.186 6.186c0 3.416 2.961 6.377 6.377 6.377 1.137 0 2.2-0.309 3.115-0.844l3.799 3.801c0.372 0.371 0.975 0.371 1.346 0l0.943-0.943c0.371-0.371 0.236-0.84-0.135-1.211zM4.004 8.287c0-2.366 1.917-4.283 4.282-4.283s4.474 2.107 4.474 4.474c0 2.365-1.918 4.283-4.283 4.283s-4.473-2.109-4.473-4.474z"></path>
							</svg>
						</button>
					</div>
				</section>
			</div>
		</div>
	);
};

export default NavSearchBar;

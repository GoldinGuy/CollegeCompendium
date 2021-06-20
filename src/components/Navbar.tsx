import { Link, useHistory, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavSearchBar from "./Search";
import { useQuery } from "../utils";
import { faList, faTable } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
	const loc = useLocation();
	let query = useQuery();
	const history = useHistory();

	const [mobileOpen, setMobileOpen] = useState(false);
	const [currentPath, setPath] = useState(loc.pathname);

	useEffect(() => {
		if (loc.pathname !== currentPath) {
			setPath(loc.pathname);
			setMobileOpen(false);
		}
	}, [loc, currentPath]);

	return (
		<nav
			className={`z-30 w-full px-2 py-4 bg-white sm:px-4 ${
				mobileOpen ? "border-b-2" : ""
			}`}
		>
			<div className="container md:px-6 py-3 mx-auto md:flex md:justify-between md:items-center">
				<div className="flex items-center justify-between">
					<div className="flex items-center not-selectable">
						{/* <HeaderLogo /> */}
						<img
							src="https://user-images.githubusercontent.com/47064842/122340134-e518d100-cf0f-11eb-8526-3c185f28e119.png"
							alt="logo"
							className="inline w-9 h-9 mr-4"
						/>
						<Link
							className="text-2xl font-extrabold congress text-gray-800 dark:text-white md:text-2xl hover:text-gray-700 dark:hover:text-gray-300 inline"
							to="/"
						>
							College Compendium
						</Link>
					</div>
					<div className="flex md:hidden">
						<button
							type="button"
							onClick={() => setMobileOpen(!mobileOpen)}
							className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600 transition duration-500 ease-in-out transform rounded hover:scale-105"
							aria-label="toggle menu"
						>
							<svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
								<path
									fillRule="evenodd"
									d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
								></path>
							</svg>
						</button>
					</div>
				</div>

				<div
					className={`items-center mt-4 md:mt-0 ${
						mobileOpen ? "" : "hidden md:flex"
					}`}
				>
					<div className="flex flex-col md:flex-row md:mx-6 items-center">
						<Link
							className="my-1 text-md font-medium text-gray-700 dark:text-gray-200 hover:text-fuchsia-500 dark:hover:text-fuchsia-400  md:mx-4 md:my-0 relative"
							to="/"
						>
							Home
							<span
								className={
									loc.pathname === "/"
										? "absolute bottom-0 left-0 w-full h-1 -mb-2 bg-fuchsia-300 rounded-full"
										: "hidden"
								}
							/>
						</Link>

						<Link
							className="my-1 text-md font-medium text-gray-700 dark:text-gray-200 hover:text-fuchsia-500 dark:hover:text-fuchsia-400  md:mx-4 md:my-0 relative"
							to={`/explore?${
								query.get("table") === "true" ? `&table=true` : ""
							}`}
						>
							Explore
							<span
								className={
									loc.pathname === "/explore"
										? "absolute bottom-0 left-0 w-full h-1 -mb-2 bg-fuchsia-300 rounded-full"
										: "hidden"
								}
							/>
						</Link>
						<Link
							className="my-1 text-md font-medium text-gray-700 dark:text-gray-200 hover:text-fuchsia-500 dark:hover:text-fuchsia-400  md:mx-4 md:my-0 relative"
							to="/contribute"
						>
							Contribute
							<span
								className={
									loc.pathname === "/contribute"
										? "absolute bottom-0 left-0 w-full h-1 -mb-2 bg-fuchsia-300 rounded-full"
										: "hidden"
								}
							/>
						</Link>
						<NavSearchBar
							classN={loc.pathname === "/explore" ? "invisible w-0" : ""}
						/>
						{loc.pathname === "/explore" || loc.pathname === "/search" ? (
							<button
								className="ml-6 focus:outline-none focus:border-0 hover:text-fuchsia-500 hidden sm:flex"
								title="Toggle Table/Grid View"
								onClick={() => {
									if (query.get("table") === "true") {
										history.push(
											`?${query}`
												.replace("&table=true", "")
												.replace("table=true", "")
										);
									} else {
										history.push(`?${query}&table=true`);
									}
								}}
							>
								<FontAwesomeIcon
									icon={query.get("table") === "true" ? faList : faTable}
									className="text-gray-600"
									size="lg"
								/>
							</button>
						) : null}
					</div>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;

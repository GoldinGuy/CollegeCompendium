import { Link, useLocation } from "react-router-dom";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
	const loc = useLocation();

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
			className={`z-30 w-full px-2 py-4 bg-white sm:px-4  ${
				mobileOpen ? "border-b-2" : ""
			}`}
		>
			<div className="container md:px-6 py-3 mx-auto md:flex md:justify-between md:items-center">
				<div className="flex items-center justify-between">
					<div className="flex items-center">
						<img
							src="https://user-images.githubusercontent.com/47064842/115316437-5d992680-a147-11eb-85c2-5fb15ee95bc3.png"
							alt="logo"
							className="inline w-9 h-9 mr-4"
						/>
						<Link
							className="text-2xl font-extrabold congress text-gray-800 dark:text-white md:text-2xl hover:text-gray-700 dark:hover:text-gray-300 inline"
							to="/"
						>
							YakClasses
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
					className={`items-center mt-4  md:mt-0 ${
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

						{/* <Link
							className="my-1 text-md font-medium text-gray-700 dark:text-gray-200 hover:text-fuchsia-500 dark:hover:text-fuchsia-400  md:mx-4 md:my-0 relative"
							to="/latest"
						>
							Latest
							<span
								className={
									loc.pathname === "/latest"
										? "absolute bottom-0 left-0 w-full h-1 -mb-2 bg-fuchsia-300 rounded-full"
										: "hidden"
								}
							/>
						</Link> */}
						{/* <Link
							className="my-1 text-md font-medium text-gray-700 dark:text-gray-200 hover:text-fuchsia-500 dark:hover:text-fuchsia-400  md:mx-4 md:my-0 relative"
							to="/search"
						>
							Fantasy News
							<span
								className={
									loc.pathname.includes("/search")
										? "absolute bottom-0 left-0 w-full h-1 -mb-2 bg-fuchsia-300 rounded-full"
										: "hidden"
								}
							/>
						</Link> */}
						<Link
							className="my-1 text-md font-medium text-gray-700 dark:text-gray-200 hover:text-fuchsia-500 dark:hover:text-fuchsia-400  md:mx-4 md:my-0 relative"
							to="/explore"
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
						<a
							className="my-1 text-lg font-extrabold congress text-fuchsia-400 hover:text-fuchsia-500  md:mx-4 md:my-0 inline sm:hidden lg:inline"
							href="https://twitter.com/DanielBfuchsia-500"
						>
							<FontAwesomeIcon icon={faTwitter} className="mr-1" />
							@YakClasses
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;

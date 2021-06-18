// import playlists from "../assets/backup/explore.json";

import { useState } from "react";
import { useHistory } from "react-router-dom";

const ExplorePage = () => {
	return (
		<>
			<section className="px-4 pb-24 pt-10 mx-auto max-w-7xl">
				<h2 className="pb-8 mb-2 text-center congress text-2xl font-extrabold leading-tight text-gray-900 md:text-4xl">
					Explore Classes
				</h2>
				<SearchBar />
				<div className="w-full flex flex-col space-y-16">
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
						{/* {playlists.map(list => {
							return (
								<a
									className=" gap-6 mb-4"
									href={`https://www.youtube.com/playlist?list=${list.id}`}
									key={list.id}
								>
									<img
										src={list.medThumb}
										className="object-cover w-full h-40 col-span-1 bg-center rounded-lg"
										alt="Thumbnail"
										loading="lazy"
									/>
									<div className="col-span-1 md:col-span-3 text-center">
										<h2
											className="mt-4 mb-3 text-xl font-extrabold leading-snug text-gray-800"
											key={list.title}
										>
											<span
												className="congress hover:text-fuchsia-200 bg-fuchsia-400  px-3 py-2 text-white" //text-gray-900
											>
												{list.title}
											</span>
										</h2>
										<p
											className="text-sm font-semibold text-gray-500"
											key={list.publishedAt}
										>
											<span className="mb-2 -mt-1 sm:mt-2 text-sm font-normal text-gray-500">
												Started {new Date(list.publishedAt).toDateString()} •{" "}
												{list.itemCount} videos
											</span>
										</p>
									
									</div>
								</a>
							);
						})} */}
					</div>
				</div>
			</section>
		</>
	);
};
export default ExplorePage;

const SearchBar = () => {
	const [query, setQuery] = useState("");

	const history = useHistory();

	const inputKeyDown = async (e: any) => {
		if (e.key === "Enter") {
			search(query);
		} else {
			const newQuery = e.target.value;
			setQuery(newQuery);
		}
	};

	const search = (term: string) => {
		term = term.toLowerCase().trim().replaceAll(" ", "-");

		if (term.length > 0) {
			// TODO: addFilter(term);
			history.push(`/search?q=${term}`);
			setQuery("");
		}
	};

	return (
		<div className="flex">
			<div className="w-full my-0 text-gray-500">
				<section className="flex items-center justify-center sm:h-20">
					<div
						className="flex items-center justify-center w-2/3"
						role="search"
						aria-label="Sitewide"
					>
						<label htmlFor="search" className="sr-only">
							Search classes by topic, university, year, or skill level
						</label>
						<input
							maxLength={25}
							type="text"
							id="search"
							value={query}
							onChange={inputKeyDown}
							onKeyUp={inputKeyDown}
							placeholder="Search classes by topic, university, year, or skill level"
							spellCheck="false"
							className="px-10 w-full py-4 -mr-8 font-sans transition-colors duration-300 transform bg-gray-200 border-none rounded-full focus:outline-none focus:bg-gray-300"
						/>
						<button
							className="transform border-none focus:border-0 focus:outline-none"
							aria-label="Submit"
							onClick={() => search(query)}
						>
							<svg
								className="text-gray-500 duration-200 fill-current hover:text-gray-700 focus:text-gray-700"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								width={20}
								height={20}
								viewBox="0 0 20 20"
							>
								<title>
									Search classes by topic, university, year, or skill level
								</title>
								<path d="M17.545 15.467l-3.779-3.779c0.57-0.935 0.898-2.035 0.898-3.21 0-3.417-2.961-6.377-6.378-6.377s-6.186 2.769-6.186 6.186c0 3.416 2.961 6.377 6.377 6.377 1.137 0 2.2-0.309 3.115-0.844l3.799 3.801c0.372 0.371 0.975 0.371 1.346 0l0.943-0.943c0.371-0.371 0.236-0.84-0.135-1.211zM4.004 8.287c0-2.366 1.917-4.283 4.282-4.283s4.474 2.107 4.474 4.474c0 2.365-1.918 4.283-4.283 4.283s-4.473-2.109-4.473-4.474z"></path>
							</svg>
						</button>
					</div>
				</section>
			</div>
		</div>
	);
};

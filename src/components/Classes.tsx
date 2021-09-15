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

import { faArrowCircleRight, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Class } from "../typings/interfaces";
import { collegeColors } from "../utils";
import ClassItem from "./ClassItem";
import ExploreTable from "./Table";
import ClipLoader from "react-spinners/ClipLoader";
import posthog from "posthog-js";


const DATA_TAGS = ["Written Notes", "Assignments", "Video Lecture(s)"];

const Classes = ({
	imgUrl,
	classes,
	displayPromo,
	filters,
	asTable,
	loading
}: {
	imgUrl?: string;
	displayPromo?: boolean;
	classes: Class[];
	filters?: string[];
    asTable: boolean;
	loading: boolean
	}) => {
	const [filteredClasses, setFilteredClasses] = useState<Class[]>([]);
	const [dataFilters, setDataFilters] = useState({
	videos: true,
	written: true,
	assignments: true
	});
	const [page, setPageCount] = useState(0);
	const startVid = displayPromo ? 1 : 0;
	const MAX_PAGES = Math.floor(filteredClasses.length / 12);
	
	useEffect(() => {
		const formatText = (text: string) => {
			return text.toString().toLowerCase().trim().replaceAll(" ", "-");
		};

		const checkFilters = (_class: Class) => {
			if (
				(dataFilters.written &&
					dataFilters.written === _class.contains.written) ||
				(dataFilters.assignments &&
					dataFilters.assignments === _class.contains.assignments) ||
				(dataFilters.videos && dataFilters.videos === _class.contains.videos)
			) {
				if (filters) {
					let included = false;
					included = filters.some((tag) => {
						let inTags = _class.tags.some((cat) => {
							if (formatText(cat).includes(tag)) {
								return true;
							}
							return false;
						});
						if (
							formatText(_class.title).includes(tag) ||
							formatText(_class.source).includes(tag) ||
							formatText(_class.url).includes(tag) ||
							formatText(_class.year).includes(tag) ||
							inTags
						) {
							return true;
						}
						return false;
					});

					return included;
				}
				return true;
			}
			return false;
		};

		let _classes = classes.filter((course) => {
			return checkFilters(course);
		});
		if (_classes.length === 0 && filters && filters?.length > 0) {
			posthog?.capture("no-classes-found", {
				filters: filters,
				dataFilters: dataFilters,
			});
		}
		setFilteredClasses(_classes);
	}, [filters, classes, dataFilters]);

	// console.log(filteredClasses, filters);

	return (
		<>
			<div className="container relative flex flex-col justify-between h-full max-w-6xl px-8 mx-auto xl:px-0 overflow-x-hidden">
				<div className="relative flex items-center self-start sm:mb-1 mt-2 font-black w-auto">
					{/* w-auto */}
					<h2
						className="relative flex items-center self-start w-auto text-4xl font-black mr-4 "
						key="header"
					>
						<span className="absolute inline-block w-full break-words h-4 mt-3 -ml-2 bg-gradient-to-r from-fuchsia-200 to-blue-300 " />
						<span className="relative">
							{filters?.map((tag, idx) => {
								return (
									<span
										className="inline-block text-2xl md:text-4xl"
										key={tag + idx}
									>
										{tag}
										{!(idx === filters.length - 1) && !tag.endsWith(",") ? (
											<span>,</span>
										) : null}
									</span>
								);
							})}
						</span>
					</h2>
				</div>
			</div>

			{!asTable ? (
				<>
					{imgUrl ? (
						<img
							src={imgUrl}
							alt="header img"
							className="object-cover w-screen object-center-top h-32 sm:h-full"
							key="header-img"
						/>
					) : null}
					<section className="w-full px-4 py-12 mx-auto max-w-7xl md:w-4/5">
						<div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
							{displayPromo && filteredClasses[0] ? (
								<div
									className="col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-3 text-center flex justify-center "
									key="featured-class"
								>
									<a
										href={filteredClasses[0].url}
										className="md:w-2/3 lg:w-1/2 relative hover:shadow-xl"
										target="_blank"
										rel="noreferrer"
									>
										<div
											className="w-full h-2 mb-3"
											style={{
												background:
													collegeColors[
														filteredClasses[0].source
															.toString()
															.toLowerCase()
															.replace(" ", "")
															.trim()
													],
											}}
										/>
										<p className="mb-4 text-xs font-semibold tracking-wider text-gray-400 uppercase ">
											{filteredClasses[0].source} | {filteredClasses[0].year}
										</p>
										<h2 className="mb-4 text-xl font-bold leading-snug text-gray-900">
											<span className="text-gray-900 hover:text-fuchsia-500 bg-fuchsia-200 px-2 py-1 ph-no-capture">
												{filteredClasses[0].title}
											</span>
										</h2>
										<p className="mb-5 text-sm font-normal text-gray-600 ph-no-capture px-2">
											{filteredClasses[0].desc}
										</p>
										<div className="py-2 text-gray-500">
											{filteredClasses[0].contains.videos && (
												<span className="flex items-center text-sm text-gray-500">
													<FontAwesomeIcon
														icon={faCheck}
														size="sm"
														className="ml-2 mr-2 text-fuchsia-500"
														// title="Video Lecture"
													/>{" "}
													Video Lecture(s)
												</span>
											)}
											{filteredClasses[0].contains.written && (
												<span className="flex items-center  text-sm text-gray-500">
													<FontAwesomeIcon
														icon={faCheck}
														size="sm"
														className="ml-2 mr-2 text-fuchsia-500"
														// title="Written Notes"
													/>{" "}
													Written Notes
												</span>
											)}
											{filteredClasses[0].contains.assignments && (
												<span className="flex items-center text-sm text-gray-500">
													<FontAwesomeIcon
														icon={faCheck}
														className="ml-2 mr-2 text-fuchsia-500"
														size="sm"
														// title="Assignments"
													/>
													Assignments
												</span>
											)}
										</div>
									</a>
								</div>
							) : null}

							{filteredClasses
								?.slice(page * 12 + startVid, page * 12 + 12 + startVid)
								.map((_class, idx) => {
									return <ClassItem _class={_class} idx={idx} />;
								})}
						</div>

						{filteredClasses.length === 0 ? (
							loading ? (
								<div
									className="mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center"
									key="loader"
								>
									<ClipLoader color={"#e47cfc"} loading={loading} size={100} />
								</div>
							) : (
								<div
									className="mx-auto py-20 px-4 sm:px-6 sm:py-18 lg:px-8 text-center"
									key="none-found"
								>
									<h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-10">
										<span className="block bg-gradient-to-r from-fuchsia-400 to-blue-500 bg-clip-text text-transparent">
											No Classes Found
										</span>
									</h2>
									<Link
										to="/explore"
										className="w-full btn btn-dark text-white font-semibold bg-fuchsia-400 hover:bg-fuchsia-500 px-6 py-3 btn-lg sm:w-auto  transition duration-500 ease-in-out transform rounded shadow-xl hover:shadow-xl hover:scale-105"
									>
										Find A Class
										<FontAwesomeIcon
											icon={faArrowCircleRight}
											className="ml-2"
										/>
									</Link>
								</div>
							)
						) : null}

						{filteredClasses.length > 0 && (
							<div
								className="flex flex-col items-center justify-center mt-20 space-x-0 space-y-2 md:space-x-2 md:space-y-0 "
								key="nav"
							>
								<div
									className="pt-0 pb-4 text-center max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl"
									key="data-contains-tags"
								>
									{DATA_TAGS.map((tag) => {
										return (
											<div
												onClick={() => {
													console.log(dataFilters);
													switch (tag) {
														case "Written Notes":
															setDataFilters((data) => ({
																...data,
																written: !data.written,
															}));
															posthog?.capture("contains-filtering", {
																filter: tag,
																enabled: dataFilters.written,
															});
															break;
														case "Assignments":
															setDataFilters((data) => ({
																...data,
																assignments: !data.assignments,
															}));
															posthog?.capture("contains-filtering", {
																filter: tag,
																enabled: dataFilters.assignments,
															});
															break;
														case "Video Lecture(s)":
															setDataFilters((data) => ({
																...data,
																videos: !data.videos,
															}));
															posthog?.capture("contains-filtering", {
																filter: tag,
																enabled: dataFilters.videos,
															});
															break;
														default:
															console.log("something weird happened");
													}
												}}
												className={`ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 mt-1 ${
													(tag === "Written Notes" && dataFilters.written) ||
													(tag === "Assignments" && dataFilters.assignments) ||
													(tag === "Video Lecture(s)" && dataFilters.videos)
														? "bg-blue-200 text-blue-700"
														: "bg-gray-200 text-gray-700"
												} rounded-full cursor-pointer`}
												key={tag}
											>
												#{tag}
											</div>
										);
									})}
								</div>
								<div className="flex-col md:flex-row" key="pagination">
									{page > 0 ? (
										<button
											onClick={() => {
												if (page > 0) setPageCount(page - 1);
											}}
											className="w-full rounded-full btn btn-light btn-xl md:w-auto bg-gray-200 hover:bg-gray-300 px-5 py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-fuchsia-400 ph-no-capture"
										>
											Classes You've Already Viewed
										</button>
									) : null}
									{page < MAX_PAGES ? (
										<button
											onClick={() => {
												if (page < MAX_PAGES) setPageCount(page + 1);
											}}
											className="w-full rounded-full btn btn-light btn-xl md:w-auto bg-gray-200  hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-fuchsia-400  px-5 py-2 ph-no-capture"
										>
											More classes!
										</button>
									) : null}
								</div>
							</div>
						)}
					</section>
				</>
			) : (
				<section className="px-4 pb-20 pt-6 mx-auto max-w-7xl" key="table">
					<ExploreTable classes={filteredClasses} />
					{filteredClasses.length === 0 ? (
						<div
							className="mx-auto py-20 px-4 sm:px-6 sm:py-18 lg:px-8 text-center"
							key="class-not-found"
						>
							<h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-10">
								<span className="block bg-gradient-to-r from-fuchsia-400 to-blue-500 bg-clip-text text-transparent">
									No Classes Found
								</span>
							</h2>
							<Link
								to="/explore"
								className="w-full btn btn-dark text-white font-semibold bg-fuchsia-400 hover:bg-fuchsia-500 px-6 py-3 btn-lg sm:w-auto  transition duration-500 ease-in-out transform rounded shadow-xl hover:shadow-xl hover:scale-105"
							>
								Find A Class
								<FontAwesomeIcon icon={faArrowCircleRight} className="ml-2" />
							</Link>
						</div>
					) : null}
				</section>
			)}
		</>
	);
};
export default Classes;

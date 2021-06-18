import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Class } from "../typings/interfaces";

function shuffle(array: Class[]) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

const Classes = ({
	imgUrl,
	classes,
	displayPromo,
	filters
}: {
	imgUrl?: string;
	displayPromo?: boolean;
	classes: Class[];
	filters?: string[];
}) => {
	const formatText = (text: string) => {
		return text.toLowerCase().trim().replaceAll(" ", "-");
	};

	const checkFilters = (_class: Class) => {
		if (filters) {
			let included = false;
			included = filters.some(tag => {
				let inTags = _class.tags.some(cat => {
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
	};

	const [filteredClasses, setFilteredClasses] = useState(
		shuffle(classes).filter(course => {
			return checkFilters(course);
		})
	);
	const [page, setPageCount] = useState(0);
	const startVid = displayPromo ? 1 : 0;
	const MAX_PAGES = Math.floor(filteredClasses.length / 12);

	console.log(filteredClasses, filters);

	return (
		<>
			<div className="container relative flex flex-col justify-between h-full max-w-6xl px-8 mx-auto xl:px-0">
				<div className="relative flex items-center self-start w-auto mb-1 mt-2   font-black">
					<h2
						className="relative flex items-center self-start w-auto text-4xl font-black mr-4 "
						key="header"
					>
						<span className="absolute inline-block w-full break-words h-4 mt-3 -ml-2 bg-gradient-to-r from-fuchsia-200 to-blue-300 " />
						<span className="relative">
							{filters?.map((tag, idx) => {
								return (
									<span>
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

			{imgUrl ? (
				<img
					src={imgUrl}
					alt="header img"
					className="object-cover w-screen object-center-top h-32 sm:h-full"
				/>
			) : null}
			<section className="w-full px-4 py-16 mx-auto max-w-7xl md:w-4/5">
				<div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
					{displayPromo && filteredClasses[0] ? (
						<div className="col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-3 text-center flex justify-center ">
							<a href={filteredClasses[0].url} className="md:w-2/3 lg:w-1/2">
								<img
									src={filteredClasses[0].thumb}
									className="object-cover sm:h-72 mb-5  bg-center  transition duration-500 ease-in-out transform rounded shadow-xl hover:shadow-xl hover:scale-105 w-full"
									alt="Thumbnail"
									loading="lazy"
								/>

								<p className="mb-2 text-xs font-semibold tracking-wider text-gray-400 uppercase">
									{filteredClasses[0].source} | {filteredClasses[0].year}
								</p>
								<h2 className="mb-2 text-xl font-bold leading-snug text-gray-900">
									<span className="text-gray-900 hover:text-fuchsia-500-600 bg-fuchsia-200 px-2 py-1">
										{filteredClasses[0].title}
									</span>
								</h2>
								<p className="mb-4 text-sm font-normal text-gray-600">
									{filteredClasses[0].desc}
								</p>
							</a>
						</div>
					) : null}

					{filteredClasses
						.slice(page * 12 + startVid, page * 12 + 12 + startVid)
						.map((_class, idx) => {
							return (
								<div
									className="group hover:scale-105 rounded shadow-lg hover:shadow-xl"
									key={_class.id + idx}
								>
									<a href={_class.url}>
										<div className="relative mb-3">
											<img
												src={_class.thumb}
												className="object-cover w-full h-56 bg-center rounded-t transition duration-500 ease-in-out transform group-hover:bg-fuchsia-500 group-hover:opacity-80 z-0 "
												alt="Thumbnail"
												loading="lazy"
											/>
											<span className="flex items-center text-gray-50 z-10 absolute top-5 right-5">
												<img
													src={_class.source_thumb}
													alt="logo"
													className="rounded-full h-10 w-10"
												/>
												{/* <div className="ml-2 text-sm">
													<p className="font-semibold">{Class.source}</p>
													<p className="">{Class.year}</p>
												</div> */}
											</span>
										</div>

										<div className="p-3">
											<p className="mb-2 text-xs font-semibold tracking-wider text-gray-400 uppercase">
												{_class.source} | {_class.year}
											</p>

											<h2 className="mb-2 text-xl font-bold leading-snug text-gray-900">
												<span className="text-gray-900 group-hover:text-fuchsia-500">
													{_class.title}
												</span>
											</h2>
											<p className="mb-4 text-sm font-normal text-gray-600">
												{_class.desc}
											</p>
										</div>
									</a>
								</div>
							);
						})}
				</div>
				{filteredClasses.length === 0 ? (
					<div className="mx-auto py-20 px-4 sm:px-6 sm:py-18 lg:px-8 text-center">
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

				<div className="flex flex-col items-center justify-center mt-20 space-x-0 space-y-2 md:space-x-2 md:space-y-0 md:flex-row">
					{page > 0 ? (
						<button
							onClick={() => {
								if (page > 0) setPageCount(page - 1);
							}}
							className="w-full rounded-full btn btn-light btn-xl md:w-auto bg-gray-200 hover:bg-gray-300 px-5 py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-fuchsia-400 "
						>
							Classes You've Already Viewed
						</button>
					) : null}
					{page < MAX_PAGES ? (
						<button
							onClick={() => {
								if (page < MAX_PAGES) setPageCount(page + 1);
							}}
							className="w-full rounded-full btn btn-light btn-xl md:w-auto bg-gray-200  hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-fuchsia-400  px-5 py-2"
						>
							More classes!
						</button>
					) : null}
				</div>
			</section>
		</>
	);
};
export default Classes;

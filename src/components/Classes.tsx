import { useState } from "react";
import { Class } from "../typings/interfaces";

const Classes = ({
	imgUrl,
	classes,
	displayLatestPromo
}: {
	imgUrl?: string;
	displayLatestPromo?: boolean;
	classes: Class[];
}) => {
	const [page, setPageCount] = useState(0);
	const startVid = displayLatestPromo ? 1 : 0;
	const MAX_PAGES = Math.floor(classes.length / 12);

	return (
		<>
			{imgUrl ? (
				<img
					src={imgUrl}
					alt="header img"
					className="object-cover w-screen object-center-top h-32 sm:h-full"
				/>
			) : null}
			<section className="w-full px-4 py-16 mx-auto max-w-7xl md:w-4/5">
				<div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
					{displayLatestPromo ? (
						<div className="col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-3 text-center flex justify-center ">
							<a href={classes[0].url} className="md:w-2/3 lg:w-1/2">
								<img
									src={classes[0].thumb}
									className="object-cover sm:h-72 mb-5  bg-center rounded transition duration-500 ease-in-out transform rounded shadow-xl hover:shadow-xl hover:scale-105 hover:shadow-xl w-full"
									alt="Thumbnail"
									loading="lazy"
								/>

								<p className="mb-2 text-xs font-semibold tracking-wider text-gray-400 uppercase">
									{classes[0].source} | {classes[0].year}
								</p>
								<h2 className="mb-2 text-xl font-bold leading-snug text-gray-900">
									<a
										href={classes[0].url}
										className="text-gray-900 hover:text-fuchsia-500-600 bg-fuchsia-200 px-2 py-1"
									>
										{classes[0].title}
									</a>
								</h2>
								<p className="mb-4 text-sm font-normal text-gray-600">
									{classes[0].desc}
								</p>
							</a>
						</div>
					) : null}

					{classes
						.slice(page * 12 + startVid, page * 12 + 12 + startVid)
						.map(Class => {
							return (
								<div className="group hover:scale-105 rounded shadow-lg hover:shadow-xl">
									<a href={Class.url}>
										<div className="relative mb-3">
											<img
												src={Class.thumb}
												className="object-cover w-full h-56 bg-center rounded-t transition duration-500 ease-in-out transform group-hover:bg-fuchsia-500 group-hover:opacity-80 z-0 "
												alt="Thumbnail"
												loading="lazy"
											/>
											<span className="flex items-center text-gray-50 z-10 absolute top-5 right-5">
												<div className="h-10 w-10 ">
													<img
														src={Class.source_thumb}
														alt="logo"
														className="rounded-full"
													/>
												</div>
												<div className="ml-2 text-sm">
													<p className="font-semibold">{Class.source}</p>
													<p className="">{Class.year}</p>
												</div>
											</span>
										</div>

										<div className="p-3">
											{/* <p className="mb-2 text-xs font-semibold tracking-wider text-gray-400 uppercase">
									{Class.source} | {Class.year}</p> */}

											<h2 className="mb-2 text-xl font-bold leading-snug text-gray-900">
												<a
													href={Class.url}
													className="text-gray-900 group-hover:text-fuchsia-500"
												>
													{Class.title}
												</a>
											</h2>
											<p className="mb-4 text-sm font-normal text-gray-600">
												{Class.desc}
											</p>
										</div>
									</a>
								</div>
							);
						})}
				</div>

				<div className="flex flex-col items-center justify-center mt-20 space-x-0 space-y-2 md:space-x-2 md:space-y-0 md:flex-row">
					{page > 0 ? (
						<button
							onClick={() => {
								if (page > 0) setPageCount(page - 1);
							}}
							className="w-full rounded-full btn btn-light btn-xl md:w-auto bg-gray-200 hover:bg-gray-300 px-5 py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-fuchsia-400 "
						>
							classes You've Already Viewed
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

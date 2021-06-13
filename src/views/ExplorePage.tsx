// import playlists from "../assets/backup/explore.json";

const ExplorePage = () => {
	return (
		<>
			<section className="px-4 pb-24 pt-10 mx-auto max-w-7xl">
				<h2 className="pb-8 mb-8 congress text-2xl font-extrabold leading-tight text-gray-900 md:text-4xl">
					Explore the DanielVerse
				</h2>
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

import { Textbook } from "../../typings/interfaces";

const TextbookGallery = ({ textbooks }: { textbooks: Textbook[] }) => {
	return (
		<>
		<h2
				className="mb-2 mt-10 text-center text-3xl leading-9 font-extrabold text-dark"
				key="contribute"
						>
						Searching for the right textbook? 
						</h2>
		<section className="w-full px-4 py-12 mx-auto sm:w-3/4 md:w-4/5 max-w-7xl">
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 text-center ">
				{textbooks.slice(0, 6).map((text) => {
					return (
						<a
							href={text.url}
							target="_blank"
							rel="noreferrer"
							onClick={() => {
								// posthog?.capture("filtering", {
								// 	filter: tag,
								// });
								// history.push(
								// 	`/search?q=${tag.toLowerCase().trim().replaceAll(" ", "-")}${
								// 		query.get("table") === "true" ? "&table=true" : ""
								// 	}`
								// );
							}}
							className="flex justify-center"
							// className="m-2 text-sm flex-col items-center px-3 py-3 bg-fuchsia-50 "
							key={text.book}
						>
							<div className="flex relative m-2 text-sm flex-row w-36 h-52 items-center bg-fuchsia-50 hover:scale-105 rounded hover:shadow-xl">
								<div
									className="absolute right-0 top-0 text-col ml-5"
									key={text.category + "2"}
								>
									<h3 className="font-semibold px-3 py-3 float-left">{text.book}</h3>
									<p className="text-xs px-3 pb-2 italic trunc-3">
										{text.author}
									</p>
								</div>
								<div
									className="h-full text-xs font-semibold capitalize whitespace-nowrap overflow-ellipsis bg-gray-200 text-gray-700 px-1 py-1"
									style={{
										writingMode: "vertical-lr",
									}}
									key={text.category}
								>
									#{text.category}
								</div>
							</div>
						</a>
					);
				})}
			</div>
			</section>
			</>
	);
};
export default TextbookGallery;
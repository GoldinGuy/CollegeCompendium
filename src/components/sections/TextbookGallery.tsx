import posthog from "posthog-js";
import { Link } from "react-router-dom";
import { Textbook } from "../../typings/interfaces";

const TextbookGallery = ({ textbooks, filters }: { textbooks: Textbook[], filters?: string[] }) => {
	const filter = (textbooks: Textbook[]): Textbook[] => {
		if (filters && filters.length > 0) {
			return textbooks.filter((text) => {
				if (
					filters.some((f) => text.book.includes(f)) ||
					filters.some((f) => text.category.includes(f)) ||
					filters.some((f) => text.author.includes(f))
				) {
					return true;
				}
				return false
			}).slice(0, 14)
		}
		return textbooks.slice(0, 6);
	}
	const containsOnly = (textbooks: Textbook[]): boolean => {
		if (filters && filters.length > 0) {
			return textbooks.some((text) => {
					if (
						filters.some((f) => text.book.includes(f)) ||
						filters.some((f) => text.category.includes(f)) ||
						filters.some((f) => text.author.includes(f))
					) {
						return true;
					}
					return false;
				})
		}
		return true
	};

	if (containsOnly(textbooks)) {
		return (
			<>
				<h2
					className="mb-2 mt-10 text-center text-3xl leading-9 font-extrabold text-dark"
					key="contribute"
				>
					Searching for the right textbook?
				</h2>
				<section className="w-full sm:px-4 py-12 mx-auto sm:w-3/4 md:w-4/5 max-w-7xl">
					<div className="flex flex-row flex-wrap	justify-center">
						{filter(textbooks).map((text) => {
							return (
								<a
									href={text.url}
									target="_blank"
									data-attr="textbook"
									rel="noreferrer"
									onClick={() => {
										if (!window.location.href.includes('127.0.0.1') && process.env.REACT_APP_PH_ID) {
											posthog?.capture("view-textbook", {
												book: text.book,
											});
										}
									}}
									className="flex justify-center"
									key={text.book}
								>
									<div className="flex relative m-2 text-sm flex-row w-36 h-52 items-center bg-fuchsia-50 hover:scale-105 rounded hover:shadow-xl">
										<div
											className="absolute right-0 top-0 text-col ml-5"
											key={text.category + "2"}
										>
											<h3 className="font-semibold px-3 py-3 float-left w-full">
												{text.book}
											</h3>
											<p className="text-xs px-3 pb-2 italic float-left w-full">
												{text.author.replace(/ *\([^)]*\) */g, "")}
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
					<div className="w-full text-center mt-6">
						<Link
							to="/textbooks"
							className="w-full rounded-full btn btn-light btn-xl md:w-auto bg-gray-200  hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-fuchsia-400 px-5 py-2 ph-no-capture mt-2 sm:mt-0 sm:ml-2"
						>
							View All Textbooks
						</Link>
					</div>
				</section>
			</>

		);
	} return null
};
export default TextbookGallery;
import posthog from "posthog-js";
import { useState } from "react";
import { BookLoader } from "../components";
import Toggle from "../components/Toggle";
import { TEXTBOOK_TAGS } from "../globals";
import { Textbook } from "../typings/interfaces";
import { shuffle } from "../utils";

const TextbookPage = ({
	textbooks,
	loading,
}: {
	textbooks: Textbook[];
	loading: boolean;
	}) => {
	const [textView, setTextView] = useState(false);
	
	const getFeaturedByCat = (books: Textbook[], cat: string) => {
		return books.filter((text) => text.category === cat).slice(0, 3);
	}
	
	
	return (
		<div className="container relative flex flex-col justify-between h-full max-w-6xl sm:px-8 mx-auto xl:px-0 overflow-x-hidden">
			<h2 className="pb-6 mb-1 text-center congress text-xl sm:text-2xl font-extrabold leading-tight px-1 text-gray-900 md:text-4xl flex flex-col items-center justify-center">
				<span className="">View Free Public CS Textbooks</span>
			</h2>

			<div className="pt-2 pb-0 text-center max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl  ph-no-capture">
				{TEXTBOOK_TAGS.map((cat) => {
					return (
						<a
							href={`#${cat}`}
							onClick={() => {
								posthog?.capture("filter-textbooks", {
									filter: cat,
								});
							}}
							className="sm:ml-4 mx-2 sm:mx-0 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 mt-1 bg-fuchsia-200 text-fuchsia-700 rounded-full cursor-pointer"
							key={cat}
						>
							{cat}
						</a>
					);
				})}
			</div>
			<div className="flex justify-center mt-3">
				<Toggle onTrigger={() => setTextView((tv) => !tv)} label="Plain Text" />
			</div>

			{/* <p className="px-0 mb-6 text-lg text-gray-600 md:text-xl lg:px-24 text-center"></p> */}
			<div className="relative flex items-center self-start sm:mb-1 font-black w-full">
				{loading ? (
					<div
						className="mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center"
						key="gallery-loader"
					>
						<BookLoader />
					</div>
				) : textView ? (
					<div className="flex flex-col">
						{TEXTBOOK_TAGS.map((category, i) => {
							return (
								<div id={category} className="px-10 pt-6">
									<span className="capitalize text-md"> {category}</span>
									<div className="flex flex-col flex-wrap">
										{shuffle(textbooks).map((text, i) => {
											if (text.category.includes(category.toLowerCase())) {
												return (
													<a
														href={text.url}
														target="_blank"
														rel="noreferrer"
														data-attr="textbook"
														className="font-normal flex flex-col py-1"
														key={text.book + i}
														onClick={() => {
															posthog?.capture("view-textbook", {
																book: text.book,
															});
														}}
													>
														<div className="text-sm ani-under w-max">
															{text.book}
														</div>
														<span className="text-xs">{text.author}</span>
													</a>
												);
											} else return null;
										})}
									</div>
								</div>
							);
						})}
					</div>
				) : (
					<div className="flex flex-col">
						{TEXTBOOK_TAGS.map((category, i) => {
							return (
								<div id={category} className="pt-6 px-4 sm:px-10">
									<span className="capitalize text-md mb-4"> {category}</span>
									<div className="flex flex-row flex-wrap justify-center sm:justify-start">
										{textbooks.map((text) => {
											if (text.category.includes(category.toLowerCase())) {
												return (
													<a
														href={text.url}
														target="_blank"
														data-attr="textbook"
														rel="noreferrer"
														onClick={() => {
															posthog?.capture("view-textbook", {
																book: text.book,
															});
														}}
														className="flex justify-center"
														key={text.book}
													>
														<div className="flex relative m-2 text-sm flex-row w-36 h-52 items-center bg-fuchsia-50 hover:scale-105 rounded hover:shadow-xl font-normal">
															<div
																className="absolute right-0 top-0 text-col ml-5"
																key={text.category + "2"}
															>
																<h3 className="font-semibold px-3 py-3 float-left w-full">
																	{text.book}
																</h3>
																<p className="text-xs px-3 pb-2 italic float-left w-full ">
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
											} else return null;
										})}
									</div>
								</div>
							);
						})}
					</div>
				)}
			</div>
		</div>
	);
};
export default TextbookPage;

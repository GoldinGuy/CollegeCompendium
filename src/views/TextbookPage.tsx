import posthog from "posthog-js";
import { BookLoader } from "../components";
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
	return (
		<div className="container relative flex flex-col justify-between h-full max-w-6xl px-8 mx-auto xl:px-0 overflow-x-hidden">
			<div className="relative flex items-center self-start sm:mb-1 mt-2 font-black w-full">
				{loading ? (
					<div
						className="mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center"
						key="gallery-loader"
					>
						<BookLoader />
					</div>
				) : (
					<div className="flex flex-col">
						{TEXTBOOK_TAGS.map((category) => {
							return (
								<div className="mt-4">
									<span className="capitalize text-md"> {category}</span>
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
													<span className="text-xs">{text.author.replace(/ *\([^)]*\) */g, "")}</span>
												</a>
											);
										} else return null;
									})}
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

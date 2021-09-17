import { BookLoader } from "../components";
import { TEXTBOOK_TAGS } from "../globals";
import { Textbook } from "../typings/interfaces";

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
                                <div>
                                   <span className="capitalize text-md"> {category}</span>
									{textbooks.map((text) => {
										if (text.category === category) {
											return (
												<div data-attr="textbook" className="text-sm font-normal">
													{text.book}
												</div>
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

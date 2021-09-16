import { Textbook } from "../../typings/interfaces";

const TextbookGallery = ({ textbooks }: { textbooks: Textbook[] }) => {
	return (
		<div className="pt-4 pb-0 text-center max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl  ph-no-capture">
			{textbooks.map((text) => {
				return (
					<div
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
						className="ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 mt-1 bg-fuchsia-200 text-fuchsia-700 rounded-full cursor-pointer"
						key={text.book}
					>
						{text.book}
					</div>
				);
			})}
		</div>
	);
};
export default TextbookGallery;
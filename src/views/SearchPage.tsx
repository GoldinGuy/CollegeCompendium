import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Classes from "../components/Classes";
import CLASSES from "../data/class_data.json";

const SearchPage = () => {
	let query = useQuery();

	// var custom: string[] = [];
	// var enabled: string[] = [];
	// const [tags, setTags] = useState({
	// 	custom,
	// 	enabled,
	// 	disabled: [""]
	// });

	// const addFilter = (tag: string) => {
	// 	tags.custom.push(tag);
	// 	setTags({ ...tags });
	// };

	return (
		<Classes
			classes={CLASSES}
			displayPromo={true}
			filters={query.get("q")?.split(" ")}
		/>
	);
};
export default SearchPage;

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

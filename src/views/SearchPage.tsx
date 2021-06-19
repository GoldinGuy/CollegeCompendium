import React from "react";
import Classes from "../components/Classes";
import CLASSES from "../data/class_data.json";
import useQuery from "../utils";

const SearchPage = () => {
	let query = useQuery();

	return (
		<Classes
			classes={CLASSES}
			displayPromo={true}
			filters={query.get("q")?.split("-")}
			asTable={query.get("table") === "true"}
		/>
	);
};
export default SearchPage;

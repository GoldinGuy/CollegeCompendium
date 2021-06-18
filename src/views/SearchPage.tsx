import React from "react";
import { useLocation } from "react-router-dom";
import Classes from "../components/Classes";
import CLASSES from "../data/class_data.json";

const SearchPage = () => {
	let query = useQuery();

	return (
		<Classes
			classes={CLASSES}
			displayPromo={true}
			filters={query.get("q")?.split("-")}
		/>
	);
};
export default SearchPage;

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

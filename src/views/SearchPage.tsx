import React from "react";
import Classes from "../components/Classes";
import CLASSES from "../data/class_data.json";

const SearchPage = () => {
	return <Classes classes={CLASSES} displayLatestPromo={true} />;
};
export default SearchPage;

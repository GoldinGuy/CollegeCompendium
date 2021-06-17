import React, { useState } from "react";
import Classes from "../components/Classes";
import CLASSES from "../data/class_data.json";

const SearchPage = () => {
	var custom: string[] = [];
	var enabled: string[] = [];
	const [tags, setTags] = useState({
		custom,
		enabled,
		disabled: [""]
	});

	const addFilter = (tag: string) => {
		tags.custom.push(tag);
		setTags({ ...tags });
	};

	return <Classes classes={CLASSES} displayLatestPromo={true} />;
};
export default SearchPage;

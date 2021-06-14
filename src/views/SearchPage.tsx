import React from "react";
import Classes from "../components/Classes";
import CLASSES from "../data/class_data.json";

const SearchPage = () => {
	return (
		<Classes
			classes={CLASSES}
			imgUrl={
				"https://user-images.githubusercontent.com/47064842/115323561-5d545780-a156-11eb-900b-774701c03189.png"
			}
		/>
	);
};
export default SearchPage;

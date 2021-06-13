import React from "react";
import Classes from "../components/Classes";
import CLASSES from "../data/class_data.json";

const LatestPage = () => {
	return <Classes classes={CLASSES} displayLatestPromo={true} />;
};
export default LatestPage;

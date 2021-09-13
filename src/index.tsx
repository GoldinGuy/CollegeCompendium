import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/tailwind.output.css";
import "./styles/theme.css";
import ReactGA from "react-ga";
ReactGA.initialize(`${process.env.REACT_APP_GA_ID}`);
// ReactGA.set({
// 	userId: auth.getUs
// })

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

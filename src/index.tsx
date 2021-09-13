import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/tailwind.output.css";
import "./styles/theme.css";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter basename="/">
			<App />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);

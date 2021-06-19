import { useLocation } from "react-router-dom";
import { Class } from "./typings/interfaces";

export function useQuery() {
	return new URLSearchParams(useLocation().search);
}

export function shuffle(array: Class[]) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

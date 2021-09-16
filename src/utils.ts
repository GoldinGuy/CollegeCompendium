/*  College Compendium Component File
Copyright (C) 2021 Seth Goldin & Samuel Crombie
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version. 
You may not use your own version of this program commerically.
This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.
You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
You can contact us for more details at team@collegecompendium.org. */

import { useLocation } from "react-router-dom";
import { Class } from "./typings/interfaces";

export function useQuery() {
	return new URLSearchParams(useLocation().search);
}

// export function shuffle(array: Class[]): Class[] {
// 	for (let i = array.length - 1; i > 0; i--) {
// 		const j = Math.floor(Math.random() * (i + 1));
// 		[array[i], array[j]] = [array[j], array[i]];
// 	}
// 	return array;
// }

// fisher yates
export function shuffle(array: Array<any>): Array<any> {
	if (!array || array.length === 0) {
		return [];
	}
	var a = array.length,
		c: Class,
		i: number;
	while (a) {
		i = Math.floor(Math.random() * a--);
		// if (
		// 	array[i].contains.written === true &&
		// 	array[i].contains.assignments === true &&
		// 	array[i].contains.videos === true
		// ) {
		// 	c = array[a - (Math.floor(Math.random() * a) + 1)];
		// 	console.log(c);
		// 	array[a] = array[i];
		// 	array[i] = c;
		// } else {
		c = array[a];
		array[a] = array[i];
		array[i] = c;
		// }
	}
	return array;
}

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

export interface Class {
	id: string;
	title: string;
	source: string;
	year: string;
	url: string;
	desc: string;
	// thumb: string;
	tags: string[] | number[];
	contains: {
		videos: boolean;
		written: boolean;
		assignments: boolean;
	};
	// source_thumb: string;
}

export interface Textbook {
	book: string;
	url: string;
	author: string;
	category: string;
}

export type Tag = string;
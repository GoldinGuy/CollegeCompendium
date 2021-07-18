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

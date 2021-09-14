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

import posthog from "posthog-js";
import React, { useState } from "react";

const FUNNY_TOPICS = [
	"Discrete Computational Nanotech",
	"Quad-Matrix Theory",
	"AIBlockchainNFTs",
	"How To Google",
	"Intro to Stack Overflow",
];

const ContributeForm = () => {
	// const [url, setUrl] = useState("");
	const [topic, setTopic] = useState("");

	const [isError, setError] = useState(false);

	// const handleChangeInputUrl = async (
	// 	event: React.ChangeEvent<HTMLInputElement>
	// ): Promise<void> => {
	// 	const newUrl = event.target.value;
	// 	setUrl(newUrl);
	// };
		const handleChangeInputTopic = async (
			event: React.ChangeEvent<HTMLInputElement>
		): Promise<void> => {
			const newTopic = event.target.value;
			setTopic(newTopic);
		};

	const handleSubmit = async (
		event: React.FormEvent<HTMLButtonElement>
	): Promise<void> => {
		event.preventDefault();
		if (topic.length > 0) {
			console.log("submitting ", topic);
			posthog?.capture("topic-suggestion", {
				topic: topic,
			});
			window.open(
				`mailto:team@collegecompendium.org?subject=TopicSuggestion&body=${topic}`
			);
			setError(false);
			setTopic("");
		} else {
			setError(true);
		}

	};

	return (
		<div id="register" className="py-14 bg-gray-50 pg-no-capture">
			<div
				className="grid max-w-screen-xl grid-cols-1 gap-8 px-8  mx-auto text-dark md:grid-cols-1 md:px-12 lg:px-32 xl:px-64 mb-5"
				key="input-form"
			>
				<div>
					<div>
						<h2
							className="mb-6 text-center text-3xl leading-9 font-extrabold text-dark"
							key="contribute"
						>
							Don't see what you're looking for?
							{/* <br />
							Share it with us! */}
						</h2>
					</div>

					<div className="mt-6">
						{/* <span
							className="text-sm font-bold text-gray-600 uppercase"
							key="email"
						>
							Topic
						</span> */}
						<input
							className="pg-no-capture w-full p-3 mt-2 text-gray-900 bg-gray-200 rounded-lg focus:outline-none focus:shadow-outline"
							onChange={handleChangeInputTopic}
							value={topic}
							type="text"
							data-attr="topic-submission-form"
							placeholder={
								FUNNY_TOPICS[Math.floor(Math.random() * FUNNY_TOPICS.length)]
							}
							key="top-input"
							maxLength={100}
						/>
					</div>
					{/* <div className="mt-6">
						<span
							className="text-sm font-bold text-gray-600 uppercase"
							key="email"
						>
							Link To Class
						</span>
						<input
							className="w-full p-3 mt-2 text-gray-900 bg-gray-300 rounded-lg focus:outline-none focus:shadow-outline"
							onChange={handleChangeInputUrl}
							value={url}
							type="text"
							placeholder="https://computerclass.college.edu"
							key="url-input"
							maxLength={100}
						/>
					</div> */}
				</div>

				{isError && (
					<div
						className="flex max-w-sm w-full mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-2 mb-2"
						key="errorMessage"
					>
						<div
							className="flex justify-center items-center w-12 bg-red-500"
							key="error-svg"
						>
							<svg
								className="h-6 w-6 fill-current text-white"
								viewBox="0 0 40 40"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z" />
							</svg>
						</div>

						<div className="-mx-3 py-2 px-4" key="error-msg">
							<div className="mx-3">
								<span className="text-red-500 font-semibold">Error</span>
								<p className="text-gray-600 text-sm">
									Verify that you have provided all required fields
								</p>
							</div>
						</div>
					</div>
				)}

				<button
					type="submit"
					onClick={handleSubmit}
					className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-fuchsia-400 hover:bg-fuchsia-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
				>
					Share it with us!
				</button>
			</div>
		</div>
	);
};

export default ContributeForm;

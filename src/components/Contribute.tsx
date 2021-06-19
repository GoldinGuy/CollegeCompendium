import React, { useState } from "react";

const ContributeForm = () => {
	const [courseTitle, setCourseTitle] = useState("");
	const [url, setUrl] = useState("");
	const [source, setSource] = useState("");
	const [desc, setDesc] = useState("");
	const [isError, setError] = useState(false);

	const titleCase = (str: string): string => {
		var splitStr: string[] = str.toLowerCase().split(" ");
		for (var i = 0; i < splitStr.length; i++) {
			splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1);
		}
		return splitStr.join(" ");
	};

	const handleChangeInputCourseTitle = async (
		event: React.ChangeEvent<HTMLInputElement>
	): Promise<void> => {
		const newTitle = event.target.value;
		setCourseTitle(newTitle);
	};

	const handleChangeInputUrl = async (
		event: React.ChangeEvent<HTMLInputElement>
	): Promise<void> => {
		const newUrl = event.target.value;
		setUrl(newUrl);
	};

	const handleChangeInputSource = async (
		event: React.ChangeEvent<HTMLInputElement>
	): Promise<void> => {
		const newSource = event.target.value;
		setSource(newSource);
	};

	const handleChangeInputDesc = async (
		event: React.ChangeEvent<HTMLTextAreaElement>
	): Promise<void> => {
		const newDesc = event.target.value;
		setDesc(newDesc);
	};

	const handleSubmit = async (
		event: React.FormEvent<HTMLButtonElement>
	): Promise<void> => {
		event.preventDefault();
		if (courseTitle.length > 0 && url.length > 0 && source.length > 0) {
			const payload = {
				name: titleCase(courseTitle),
				email: url,
				source: source,
				desc: desc
			};
			// console.log(process.env.REACT_APP_CONTRIBUTE_API, payload);
			console.log("submitting ", payload);
			if (process.env.REACT_APP_CONTRIBUTE_API) {
				const request = new XMLHttpRequest();
				request.open(
					"PATCH",
					"https://json.extendsclass.com/bin/fca7c6dc9444",
					true
				);
				request.setRequestHeader(
					"Content-type",
					"application/merge-patch+json"
				);
				request.setRequestHeader(
					"Security-key",
					`${process.env.REACT_APP_CONTRIBUTE_API}`
				);
				request.onreadystatechange = () => {};
				request.send(JSON.stringify(payload));
			}
			setError(false);
			setDesc("");
			setSource("");
			setUrl("");
			setCourseTitle("");
		} else {
			setError(true);
		}
	};

	return (
		<div id="register" className="py-28">
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
							Contribute Classes To Our Compendium!
						</h2>

						<span
							className="text-sm font-bold text-gray-600 uppercase"
							key="name"
						>
							Class Title
						</span>
						<input
							className="w-full p-3 mt-2 text-gray-900 bg-gray-300 rounded-lg focus:outline-none focus:shadow-outline"
							type="text"
							onChange={handleChangeInputCourseTitle}
							value={courseTitle}
							placeholder="Foundations of Deprecation"
							maxLength={50}
							key="title-input"
						/>
					</div>

					<div className="mt-6">
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
					</div>
					<div className="mt-6">
						<span
							className="text-sm font-bold text-gray-600 uppercase "
							key="attending"
						>
							College Name
						</span>
						<input
							className="w-full p-3 mt-2 text-gray-900 bg-gray-300 rounded-lg focus:outline-none focus:shadow-outline"
							onChange={handleChangeInputSource}
							value={source}
							type="text"
							placeholder="Stanford"
							key="source-input"
							maxLength={100}
						/>
					</div>
					<div className="mt-6">
						<span
							className="text-sm font-bold text-gray-600 uppercase "
							key="desc"
						>
							Class Description
						</span>
						<textarea
							className="w-full p-3 mt-2 text-gray-900 bg-gray-300 rounded-lg focus:outline-none focus:shadow-outline"
							onChange={handleChangeInputDesc}
							value={desc}
							key="desc-input"
							placeholder="A Descriptively Descriptive Description"
							maxLength={300}
							rows={4}
						/>
					</div>
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
					Submit
				</button>
			</div>
		</div>
	);
};

export default ContributeForm;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const ContributeForm = () => {
	const [courseTitle, setCourseTitle] = useState("");
	const [email, setEmail] = useState("");
	const [numKids, setNumKids] = useState(1);
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

	const handleChangeInputEmail = async (
		event: React.ChangeEvent<HTMLInputElement>
	): Promise<void> => {
		const newEmail = event.target.value;
		setEmail(newEmail);
	};

	const handleChangeInputNumKids = async (
		event: React.ChangeEvent<HTMLInputElement>
	): Promise<void> => {
		const newNumKids = parseInt(event.target.value);
		setNumKids(newNumKids);
	};

	const handleSubmit = async (
		event: React.FormEvent<HTMLButtonElement>
	): Promise<void> => {
		event.preventDefault();
		if (courseTitle.length > 0 && email.length > 0 && numKids > 0) {
			const payload = {
				name: titleCase(courseTitle),
				email: email.toLowerCase(),
				numKids
			};
			// TODO: Actually send this info somewhere
			console.log(payload);
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
							key="signup"
						>
							Sign Up for Reading Programs!
						</h2>

						<span
							className="text-sm font-bold text-gray-600 uppercase"
							key="name"
						>
							Name
						</span>
						<input
							className="w-full p-3 mt-2 text-gray-900 bg-gray-300 rounded-lg focus:outline-none focus:shadow-outline"
							type="text"
							onChange={handleChangeInputCourseTitle}
							value={courseTitle}
							placeholder="John Doe"
							maxLength={50}
							key="name-input"
						/>
					</div>

					<div className="mt-6">
						<span
							className="text-sm font-bold text-gray-600 uppercase"
							key="email"
						>
							Email
						</span>
						<input
							className="w-full p-3 mt-2 text-gray-900 bg-gray-300 rounded-lg focus:outline-none focus:shadow-outline"
							onChange={handleChangeInputEmail}
							value={email}
							type="text"
							placeholder="johndoe@email.com"
							key="email-input"
							maxLength={100}
						/>
					</div>
					<div className="mt-6">
						<span
							className="text-sm font-bold text-gray-600 uppercase "
							key="attending"
						>
							Number of Kids Attending
						</span>
						<input
							className="w-full p-3 mt-2 text-gray-900 bg-gray-300 rounded-lg focus:outline-none focus:shadow-outline"
							onChange={handleChangeInputNumKids}
							value={numKids}
							type="number"
							max="5"
							min="1"
							key="attending-input"
							placeholder="A Descriptively Descriptive Description"
							maxLength={3}
						/>
					</div>
					{/* <div className="mt-6">
						<span
							className="text-sm font-bold text-gray-600 uppercase "
							key="attending"
						>
							Attendee Is 
						</span>
						<input
							className="w-full p-3 mt-2 text-gray-900 bg-gray-300 rounded-lg focus:outline-none focus:shadow-outline"
							onChange={handleChangeInputNumKids}
							value={numKids}
							type="number"
							max="5"
							min="1"
							key="attending-input"
							placeholder="A Descriptively Descriptive Description"
							maxLength={3}
						/>
					</div> */}
				</div>
				<div className="flex items-center justify-between">
					<div className="flex items-center">
						<input
							id="agreement"
							name="agreement"
							type="checkbox"
							className="h-4 w-4 text-yellow-600 focus:ring-indigo-500 border-gray-300 rounded"
						/>
						<label
							htmlFor="agreement"
							className="ml-2 block text-sm text-gray-900"
						>
							I have read the agreement
						</label>
					</div>
					<div className="text-sm">
						<Link
							target="_blank"
							to="/tos"
							className="text-yellow-400 text-md text-center font-bold border-none focus:border-0 focus:outline-none w-full"
						>
							Agreement, Waiver & Release
						</Link>
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
									Verify that you have filled out all required fields
								</p>
							</div>
						</div>
					</div>
				)}

				<button
					type="submit"
					onClick={handleSubmit}
					className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 "
				>
					<span className="absolute left-0 inset-y-0 flex items-center pl-3">
						<svg
							className="h-5 w-5 text-yellow-500 group-hover:text-yellow-400"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							{/* <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /> */}
						</svg>
					</span>
					Register
				</button>
			</div>
		</div>
	);
};

export default ContributeForm;

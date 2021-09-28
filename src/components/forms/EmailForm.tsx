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
import { useState } from "react";

const EmailForm = () => {
	const [email, setEmail] = useState("");

	return (
		<section className="px-4 py-8 mx-auto max-w-7xl ph-no-capture">
			<div className="w-full mx-auto text-left md:w-11/12 xl:w-8/12 md:text-center">
				<p className="mb-6 text-lg text-gray-500 md:text-xl md:leading-normal">
					<i className="mb-4 block">
						We’re on a mission to bring the best of open-source learning to
						students everywhere
					</i>
					Join us for personal content recommendations and weekly digests on
					awesome CS resources
				</p>

				<form
					action="https://collegecompendium.us5.list-manage.com/subscribe/post?u=20885e7b5573defa4709ae6a2&amp;id=fbc4b1cb3e"
					method="post"
					id="mc-embedded-subscribe-form"
					name="mc-embedded-subscribe-form"
					target="_blank"
					noValidate
					className="grid w-full grid-cols-1 gap-3 pt-1 mx-auto mb-8 lg:grid-cols-6 md:w-7/12"
				>
					<label className="col-auto lg:col-span-4 ">
						<span className="sr-only">Your Email</span>
						<input
							className="w-full p-3 text-md text-gray-900 bg-gray-200 rounded-xl focus:outline-none focus:shadow-outline"
							placeholder="Enter your email..."
							type="email"
							name="EMAIL"
							id="mce-EMAIL"
							required
							onChange={(e) => setEmail(e.target.value)}
							value={email}
						/>
						<input type="checkbox" value="1" name="group[fbc4b1cb3e][1]" id="mce-group[fbc4b1cb3e]-fbc4b1cb3e-0" className="hidden" checked/>
						<div
							style={{ position: "absolute", left: "-5000px" }}
							aria-hidden="true"
						>
							<input
								type="text"
								name="b_20885e7b5573defa4709ae6a2_fbc4b1cb3e"
								tabIndex={-1}
								value=""
							/>
						</div>
					</label>
					<input
						onSubmit={
							(e) =>{
							e.preventDefault();
							if (
								email.includes("@") &&
								email.includes(".") &&
								process.env.REACT_APP_IFTTT_KEY
							) {
								console.log("Email is valid: ", email);
								posthog?.capture("joined-mailing-list");
								fetch(
									`https://maker.ifttt.com/trigger/email_received/with/key/${process.env.REACT_APP_IFTTT_KEY}?&value1=${email}`,
									{
										method: "POST",
										mode: "no-cors",
									}
								);
								setEmail("");
							}
						}
						}
						className="w-full col-auto btn btn-primary btn-lg lg:col-span-2 rounded-xl text-white bg-fuchsia-400 hover:bg-fuchsia-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-semibold"
						type="submit"
						value="Oh Yeah!"
						name="subscribe"
						id="mc-embedded-subscribe"
						data-attr="mailing-list-signup"
					/>
				</form>
			</div>
		</section>
	);
};
export default EmailForm;

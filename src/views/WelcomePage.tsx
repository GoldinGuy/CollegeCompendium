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

import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

const WelcomePage = () => {
	const [email, setEmail] = useState("");

	return (
		<section className="px-4 py-16 mx-auto max-w-7xl">
			<div className="w-full mx-auto text-left md:w-11/12 xl:w-8/12 md:text-center">
				<h1 className="mb-3 text-5xl md:text-6xl font-extrabold text-gray-900  md:leading-tight md:font-extrabold">
					Welcome to the
					<span className="block w-full pb-3 text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-blue-500">
						College Compendium Community!
					</span>{" "}
				</h1>
				<p className="mb-6 text-lg text-gray-500 md:text-xl md:leading-normal">
					<i className="mb-4 block">
						We’re on a mission to bring the best of open source learning to
						students everywhere
					</i>
					Like what we're doing? Share Compendium with a friend!
				</p>

				{/* <form method="post" action="http://us5.forward-to-friend.com/forward/post">
<input type="hidden" name="u" value="20885e7b5573defa4709ae6a2">
<input type="hidden" name="id" value="*|CAMPAIGN_UID|*">
<input type="hidden" name="absplit_group" value="*|ABGROUP|*">
<input type="hidden" name="orig-lang" value="1">

<label for="friend-name"><strong>Your friend's name:</strong> <span class="asterisk">*</span></label>
<div class="field-group">
	<input type="text" name="friend_name" id="friend-name" size="35" value="*|FRIEND_NAME|*">
	
</div>
<label for="friend-email"><strong>Your friend's email address:</strong> <span class="asterisk">*</span></label>
<div class="field-group">
	<input type="text" name="friend_email" id="friend-email" size="35" value="*|FRIEND_EMAIL|*">
	
</div>
<label for="your-name"><strong>Your full name:</strong> <span class="asterisk">*</span></label>
<div class="field-group">
	<input type="text" name="your_name" value="*|YOUR_NAME|*" id="your-name" size="35">
    
</div>
<label for="your-email"><strong>Your email address:</strong> <span class="asterisk">*</span></label>
<div class="field-group">
	<input type="text" name="your_email" value="*|YOUR_EMAIL|*" id="your-email" size="35">
    
</div>
<label for="forward-message"><strong>A brief, personal note to this friend:</strong> <span class="asterisk">*</span></label>
<div class="field-group">
    <textarea wrap="soft" name="message" id="message">*|MESSAGE|*</textarea>
	<div class="field-help">Example: "Hi Bob, I thought you'd be interested in this newsletter, because..."</div>
    

</div>

<input class="formEmailButton" type="submit" name="submit" value="Send Email">
<p>
	<strong>Privacy Pledge</strong><br>
	The information you enter on this page will only be used to forward the email to your friend.<br>
	<a href="http://mailchimp.com/about/ftf-privacy/" class="privacyLink">More information about this service.</a>
</p>
<br class="clear">
</form>

 */}

				<form
					method="post"
					action="http://us5.forward-to-friend.com/forward/post"
					className="grid w-full grid-cols-1 gap-3 pt-1 mx-auto mb-8 lg:grid-cols-6 md:w-7/12"
				>
					<input type="hidden" name="u" value="20885e7b5573defa4709ae6a2" />
					<input type="hidden" name="id" value="7f76476ef3a2" />
					<input type="hidden" name="absplit_group" value="A" />
					<input type="hidden" name="orig-lang" value="1"></input>
					<input
						type="text"
						name="your_name"
						value="a friend"
						id="your-name"
						className="hidden"
					></input>
					<input
						type="text"
						name="friend_name"
						id="friend-name"
						className="hidden"
						value="Curious Developer"
					></input>
					<input
						type="text"
						name="your_email"
						value="team@collegecompendium.org"
						id="your-email"
						className="hidden"
					></input>
					<label className="col-auto lg:col-span-4 ">
						<span className="sr-only">Friend's Email</span>
						<input
							className="w-full p-3 text-md text-gray-900 bg-gray-200 rounded-xl focus:outline-none focus:shadow-outline"
							type="text"
							name="friend_email"
							id="friend-email"
							placeholder="Friend's email"
							required={true}
							onChange={(e) => setEmail(e.target.value)}
							value={email}
						/>
						<textarea
							wrap="soft"
							name="message"
							className="hidden"
							id="message"
							value="Hey curious developer, 
                         a friend thought you might find our content over @ collegecompendium.org interesting! Check out the site and join us for personal content recommendations and weekly digests on awesome CS resources.
                         
                         Best, Sam & Seth"
						></textarea>
					</label>
					<button
						// onClick={() => {
						// 	if (
						// 		email.includes("@") &&
						// 		email.includes(".") &&
						// 		process.env.REACT_APP_IFTTT_KEY
						// 	) {
						// 		console.log("Email is valid: ", email);
						// 		// fetch(
						// 		// 	`https://maker.ifttt.com/trigger/email_received/with/key/${process.env.REACT_APP_IFTTT_KEY}?&value1=${email}`,
						// 		// 	{
						// 		// 		method: "POST",
						// 		// 		mode: "no-cors",
						// 		// 		// headers: {
						// 		// 		// 	"Content-Type": "application/json"
						// 		// 		// 	// "Access-Control-Allow-Methods": "*"
						// 		// 		// },
						// 		// 		// body: JSON.stringify({
						// 		// 		// 	value1: email
						// 		// 		// })
						// 		// 	}
						// 		// );
						// 		setEmail("");
						// 	}
						//                                             }}
						type="submit"
						name="submit"
						value="Send Email"
						className="w-full col-auto btn py-3 btn-primary btn-lg lg:col-span-2 rounded-xl text-white bg-fuchsia-400 hover:bg-fuchsia-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-semibold"
					>
						Oh Yeah!
					</button>
				</form>
				<div className="flex flex-col justify-start mb-3 space-x-0 space-y-2 text-sm text-gray-600 md:flex-row md:justify-center md:space-x-8 md:space-y-0">
					<a
						className="hover:underline"
						href="mailto:team@collegecompendium.org&subject=College Compendium Inquiry"
					>
						Get In Touch <FontAwesomeIcon icon={faEnvelope} className="ml-2 " />
					</a>
					{/* <p className="">
							College Compendium is not affiliated with any classes
						</p> */}
					<a className="hover:underline" href="https://discord.gg/gKYSMeJ">
						Join Our Discord{" "}
						<FontAwesomeIcon icon={faDiscord} className="ml-2 " />
					</a>
					<Link to="/" className="hover:underline">
						Back to Home <FontAwesomeIcon icon={faHome} className="ml-2 " />
					</Link>
				</div>
			</div>
		</section>
	);
};
export default WelcomePage;

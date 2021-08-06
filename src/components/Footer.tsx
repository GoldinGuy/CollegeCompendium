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
import { faEnvelope, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Footer = React.memo(() => {
	return (
		<footer className="px-6 sm:px-12 md:px-24 pb-12 mx-auto max-w-screen bg-gray-50">
			<div className="flex flex-col items-start justify-between pt-10 mt-10 border-t border-gray-100 md:flex-row md:items-center">
				<p className="mb-2 font-semibold text-sm text-left text-gray-600 md:mb-0">
					© 2021{" "}
					<a href="https://collegecompendium.org" className="text-fuchsia-500">
						College Compendium Nonprofit Corporation
					</a>{" "}
				</p>

				<span className="mb-0 text-xs lg:text-sm text-left text-gray-600 md:mb-0 flex flex-col md:flex-row justify-between">
					<p className="mb-2 md:mb-0 pr-6">
						College Compendium is not affiliated with any colleges or classes.
						Please do <i>not</i> attempt to contact professors.
					</p>
					<Link
						to="/tos"
						className="mb-2 md:mb-0 hover:underline pr-6 flex items-center"
						// href="https://www.youtube.com/watch?v=oHg5SJYRHA0"
					>
						Terms{" "}
						<FontAwesomeIcon icon={faInfoCircle} className="ml-2 inline" />
					</Link>
					<a
						className="mb-2 md:mb-0 hover:underline pr-6 flex items-center"
						href="https://discord.gg/gKYSMeJ"
					>
						Discord <FontAwesomeIcon icon={faDiscord} className="ml-2 inline" />
					</a>
					<a
						className="mb-2 md:mb-0 hover:underline pr-6 flex items-center"
						href="mailto:team@collegecompendium.org&subject=College Compendium Inquiry"
					>
						Contact{" "}
						<FontAwesomeIcon icon={faEnvelope} className="ml-2 inline" />
					</a>
				</span>
			</div>
		</footer>
	);
});
export default Footer;

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

import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import EmailForm from "./EmailForm";

const CTA = () => {
	return (
		<div className="bg-white">
			<div className="max-w-4xl mx-auto py-20 px-4 sm:px-6 sm:py-18 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
				<h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
					<span className="block">Ready to learn some Computer Science?</span>
					<span className="block bg-gradient-to-r from-fuchsia-400 to-blue-500 bg-clip-text text-transparent">
						Explore our collection of resources!
					</span>
				</h2>
				<div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5 items-center">
					<Link
						to="/explore"
						className="flex items-center justify-center px-4 py-3  text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-fuchsia-400 to-fuchsia-500 hover:from-fuchsia-500 hover:to-fuchsia-600 mb-3 sm:mb-0"
					>
						Get Started
						<FontAwesomeIcon icon={faArrowCircleRight} className="ml-2" />
					</Link>
					<a
						href="https://www.producthunt.com/posts/college-compendium?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-college-compendium"
						target="_blank"
						rel="noreferrer"
						data-attr="producthunt-ref"
					>
						<img
							src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=300824&theme=light&period=daily"
							alt="College Compendium - A collection of 1000+ university CS courses for the curious | Product Hunt"
						/>
					</a>
				</div>
			</div>
			<EmailForm />
		</div>
	);
};
export default CTA;

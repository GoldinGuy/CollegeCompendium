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
						Explore our collection of classes!
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
						className=""
					>
						<img
							src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=300824&theme=light&period=daily"
							alt="College Compendium - A collection of 650+ university CS courses for the curious | Product Hunt"
						/>
					</a>
				</div>
			</div>
			<EmailForm />
		</div>
	);
};
export default CTA;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
// 	faDiscord,
// 	faFacebook,
// 	faGoodreadsG,
// 	faInstagram,
// 	faLinkedin,
// 	faPatreon,
// 	faReddit,
// 	faTwitch,
// 	faTwitter,
// 	faYoutube
// } from "@fortawesome/free-brands-svg-icons";
// import {
// 	faMicrophoneAlt,
// 	faShoppingBag
// } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="px-6 sm:px-12 md:px-24 pb-12 mx-auto max-w-screen bg-gray-50">
			{/* <div className="grid grid-cols-2 gap-10 mb-3 md:grid-cols-3 lg:grid-cols-11 lg:gap-20">
				<div className="flex items-center col-span-3 ">
					<img
						src="https://user-images.githubusercontent.com/47064842/115316437-5d992680-a147-11eb-85c2-5fb15ee95bc3.png"
						alt="logo"
						className="inline w-9 h-9 mr-4"
					/>
					<Link
						className="congress text-2xl text-fuchsia-500 font-bold font-extrabold congress text-gray-800 dark:text-white md:text-2xl hover:text-gray-700 dark:hover:text-gray-300 inline"
						to="/"
					>
						Daniel fuchsia-500
					</Link>
				</div>

				<nav className="col-span-1 md:col-span-1 lg:col-span-2">
					<a
						className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-fuchsia-500 items-center"
						href="https://www.youtube.com/channel/UCw--xPGVVxYzRsWyV1nFqgg"
					>
						<FontAwesomeIcon icon={faYoutube} className="mr-2" />
						Channel
					</a>
					<a
						className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-fuchsia-500 items-center"
						href="https://www.patreon.com/DanielBfuchsia-500"
					>
						<FontAwesomeIcon icon={faPatreon} className="mr-2" />
						Patreon
					</a>
					<a
						className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-fuchsia-500 items-center"
						href="https://teespring.com/stores/fantasy-news-2"
					>
						<FontAwesomeIcon icon={faShoppingBag} className="mr-2" />
						Merch
					</a>
				</nav>
				<nav className="col-span-2 md:col-span-1 lg:col-span-2">
					<a
						className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-fuchsia-500 items-center"
						href="https://discord.gg/xUzhVv4"
					>
						<FontAwesomeIcon icon={faDiscord} className="mr-2" />
						Discord
					</a>
					<a
						className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-fuchsia-500 items-center"
						href="https://www.reddit.com/r/danielfuchsia-500​"
					>
						<FontAwesomeIcon icon={faReddit} className="mr-2" />
						Reddit
					</a>
					<a
						className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-fuchsia-500 items-center"
						href="https://www.twitch.tv/fantasynews"
					>
						<FontAwesomeIcon icon={faTwitch} className="mr-2" />
						Twitch
					</a>
				</nav>
				<nav className="col-span-1 md:col-span-1 lg:col-span-2">
					<a
						className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-fuchsia-500 items-center"
						href="https://twitter.com/DanielBfuchsia-500"
					>
						<FontAwesomeIcon icon={faTwitter} className="mr-2" />
						Twitter
					</a>
					<a
						className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-fuchsia-500 items-center"
						href="https://www.instagram.com/dfuchsia-500101/"
					>
						<FontAwesomeIcon icon={faInstagram} className="mr-2" />
						Instagram
					</a>
					<a
						className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-fuchsia-500 items-center"
						href="https://www.instagram.com/dfuchsia-500101/"
					>
						<FontAwesomeIcon icon={faFacebook} className="mr-2" />
						Facebook
					</a>
				</nav>
				<nav className="col-span-1 md:col-span-1 lg:col-span-2">
					<a
						className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-fuchsia-500 items-center"
						href="https://afictionalconversation.podbean.com/"
					>
						<FontAwesomeIcon icon={faMicrophoneAlt} className="mr-2" />
						Podcast
					</a>
					<a
						className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-fuchsia-500 items-center"
						href="https://www.goodreads.com/author/show/21193761.Daniel_B_fuchsia-500"
					>
						<FontAwesomeIcon icon={faGoodreadsG} className="mr-2" />
						GoodReads
					</a>
					<a
						className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-fuchsia-500 items-center"
						href="https://www.linkedin.com/in/daniel-fuchsia-500-7a351bb3/"
					>
						<FontAwesomeIcon icon={faLinkedin} className="mr-2" />
						LinkedIn
					</a>
				</nav>
			</div> */}
			<div className="flex flex-col items-start justify-between pt-10 mt-10 border-t border-gray-100 md:flex-row md:items-center">
				<p className="mb-2 font-semibold text-sm text-left text-gray-600 md:mb-0">
					© 2021{" "}
					<a href="https://goldinwebdesign.com" className="text-fuchsia-500">
						Goldin Web Design
					</a>
				</p>
				<p className="mb-0 text-xs text-left text-gray-600 md:mb-0">
					YakClasses is not affiliated with any of the <br />
					colleges or classes listed on this website
				</p>
			</div>
		</footer>
	);
};
export default Footer;

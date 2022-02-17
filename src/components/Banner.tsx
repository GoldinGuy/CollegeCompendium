import posthog from "posthog-js";
import { useState } from "react";
import { NEWS_DATA_VERSION } from "../globals";

const Banner = () => {
	const locData = localStorage?.getItem("news-banner");
	const [showBanner, setShowBanner] = useState(
		locData && JSON.parse(locData)?.version === NEWS_DATA_VERSION ? false : true
	);

	const hideBanner = (act: string) => {
		if (!window.location.href.includes('127.0.0.1') && process.env.REACT_APP_PH_ID) {
			posthog?.capture("banner", {
				action: act,
			});
		}
		localStorage?.setItem("news-banner", NEWS_DATA_VERSION);
		setShowBanner(false);
	};
	if (showBanner) {
		return (
			<div className="bg-fuchsia-400">
				<div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between flex-wrap">
						<div className="w-0 flex-1 flex items-center">
							<span className="flex p-2 rounded-lg bg-fuchsia-500">
								<svg
									className="h-6 w-6 text-white"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
									/>
								</svg>
							</span>
							<p className="ml-3 font-medium text-white truncate">
								<span className="md:hidden">
									{" "}
									We launched a course on auditing with FreeCodeCamp!{" "}
								</span>
								<span className="hidden md:inline">
									{" "}
									We just launched a course on auditing with FreeCodeCamp!{" "}
								</span>
							</p>
						</div>
						<div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
							<a
								href="https://www.freecodecamp.org/news/how-to-audit-a-class-university-course/"
								target="_blank"
								rel="noreferrer"
								onClick={() => hideBanner("read")}
								className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-fuchsia-500 bg-white hover:bg-indigo-50"
							>
								{" "}
								Read now!{" "}
							</a>
						</div>
						<div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
							<button
								onClick={() => hideBanner("dismiss")}
								type="button"
								className="-mr-1 flex p-2 rounded-md hover:bg-fuchsia-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
							>
								<span className="sr-only">Dismiss</span>
								<svg
									className="h-6 w-6 text-white"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}else {
		return null;
		}

};
export default Banner;

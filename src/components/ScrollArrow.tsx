import { faHandPointUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const ScrollArrow = () => {
	const [showScroll, setShowScroll] = useState(false);

	const checkScrollTop = () => {
		if (!showScroll && window.pageYOffset > 500) {
			setShowScroll(true);
		} else if (showScroll && window.pageYOffset <= 500) {
			setShowScroll(false);
		}
	};

	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	window.addEventListener("scroll", checkScrollTop);

    return (
			<button
				id="scroll-top"
				className={`${
					showScroll ? "flex" : "hidden"
				} fixed bottom-5 right-5 w-14 h-14 rounded-full bg-blue-600 hover:bg-opacity-90 bg-opacity-50 focus:outline-none focus:border-0 flex justify-center items-center`}
				onClick={scrollTop}
			>
				<FontAwesomeIcon
					icon={faHandPointUp}
					className="text-white"
					size="lg"
				/>
			</button>
		);
};

export default ScrollArrow;

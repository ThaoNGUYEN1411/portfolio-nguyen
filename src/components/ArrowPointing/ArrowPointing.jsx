import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";

const ArrowPointing = () => {
	const [isVisible, setIsVisible] = useState(false);

	// display arrow point when scroll > 100px
	const toggleVisibility = () => {
		if (window.scrollY > 100) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	//add listener event for page scrolling

	useEffect(() => {
		window.addEventListener("scroll", toggleVisibility);

		// delete listener event quand component unmounted

		return () => {
			window.removeEventListener("scroll", toggleVisibility);
		};
	}, []);

	// scroll on top
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<div>
			{isVisible && (
				// rome-ignore lint/a11y/useButtonType: <explanation>
				<button className="arrow-pointing" onClick={scrollToTop}>
					<FontAwesomeIcon icon={faArrowUp} />
				</button>
			)}
		</div>
	);
};

export default ArrowPointing;

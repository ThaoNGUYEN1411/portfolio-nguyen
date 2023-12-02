// import ParticlesBackground from "../Particles/ParticlesBackground";
import { useEffect, useState } from "react";
import Loader from "react-loaders";
import "animate.css";

import Avatar from "/img/avatar3.webp";
import AnimatedLetters from "../Aminations/AnimatedLetters";
// import
// import FadeInWhenVisible from "../Aminations/FideInWhenVisibe.jsx";
// import FadeIn from "../Aminations/FadeIn.jsx";
// import WhileHover from "../Aminations/WhileHover.jsx";

const Banner = () => {
	const [letterClass, setLetterClass] = useState("text-animate");

	const nameArray = ["T", "h", "a", "o", " ", "N", "G", "U", "Y", "E", "N"];
	const jobArray = [
		"D",
		"é",
		"v",
		"e",
		"l",
		"o",
		"p",
		"p",
		"e",
		"u",
		"s",
		"e",
		" ",
		"W",
		"e",
		"b",
	];

	useEffect(() => {
		setTimeout(() => {
			setLetterClass("text-animate-hover");
		}, 4000);
	}, [setLetterClass]);

	return (
		<section
			className="bgimage container-fluid d-flex justify-content-center"
			id="home"
		>
			{/* <WhileHover> */}
			<div>
				<article className="hero-text mx-2">
					<div className="d-flex justify-content-center">
						<img src={Avatar} alt="Avatar" id="avatar" />
						<h1 className="hero-title pb-4 display-1 fw-semibold text-center pe-4 me-lg-5">
							<AnimatedLetters
								letterClass={letterClass}
								strArray={nameArray}
								idx={5}
							/>
							<br />
							<AnimatedLetters
								letterClass={letterClass}
								strArray={jobArray}
								idx={17}
							/>
						</h1>
					</div>

					<h3 className="hero-desc fw-normal text-center mx-auto mt-3 mb-5 pe-4 py-4">
						À la recherche d'une alternance en développement web, avec un rythme
						de 3 semaines en entreprise et une semaine à l'école, à partir du 11
						mars 2024. N'hésitez pas à me contacter !
					</h3>
				</article>

				<div className="btn-sub d-flex text-center justify-content-center">
					<a
						href="#propos"
						className="btn btn-primary bt-style"
						rel="noreferrer"
					>
						En savoir plus
					</a>
					<a
						href="/public/img/CV_NGUYEN_Dev_Web_v2.pdf"
						className="btn btn-primary bt-style"
						target="_blank"
						rel="noreferrer"
					>
						Téléchargez CV
					</a>
				</div>
				{/* <ParticlesBackground /> */}
			</div>
			{/* </WhileHover> */}
			<Loader type="pacman" />
		</section>
	);
};

export default Banner;

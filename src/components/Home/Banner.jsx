import { useEffect, useState } from "react";
import Loader from "react-loaders";
import "animate.css";
import Avatar from "/img/avt2.webp";
import AnimatedLetters from "../Aminations/AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faLinkedin,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";

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
						<h1 className="hero-title display-1 fw-semibold text-center pe-5 pt-5">
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
						<img src={Avatar} alt="Avatar" id="avatar" />
					</div>

					<h3 className="hero-desc fw-normal text-center mx-auto mt-5 mb-5">
						À la recherche d'une alternance en développement web, avec un rythme
						de 3 semaines en entreprise et une semaine à l'école, à partir du 07
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
						href="/img/CV-NGUYEN-alternance-v2.pdf"
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
			<ul id="listIcons" className="ps-0">
				<li>
					<a
						href="https://www.linkedin.com/in/phuong-thao-nguyen-devweb/"
						target="blank"
					>
						<FontAwesomeIcon icon={faLinkedin} className="icon" />
					</a>
				</li>
				<li className="list-unstyled">
					<a href="https://github.com/ThaoNGUYEN1411" target="blank">
						<FontAwesomeIcon icon={faGithub} className="icon" />
					</a>
				</li>
				<li>
					<a href="#">
						<FontAwesomeIcon icon={faTwitter} className="icon" />
					</a>
				</li>
			</ul>
			{/* <Loader type="pacman" /> */}
		</section>
	);
};

export default Banner;

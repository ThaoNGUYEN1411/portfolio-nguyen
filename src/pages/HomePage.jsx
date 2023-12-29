import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Home/Banner";
import About from "../components/About/About";
import Portfolio from "../components/Portfolio/Portfolio";
import Parcours from "../components/Parcours/Parcours";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import ArrowPointing from "../components/ArrowPointing/ArrowPointing";

const HomePage = () => {
	return (
		<>
			<Navbar />
			<Banner />
			<About />
			<Portfolio />
			<Parcours />
			<Contact />
			<ArrowPointing />
			<Footer />
		</>
	);
};

export default HomePage;

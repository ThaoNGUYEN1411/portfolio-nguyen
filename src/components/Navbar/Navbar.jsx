// import Logo from "/img/logo-final2.webp";
// import "../../assets/globalStyle.css";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Navbar = () => {
// 	return (
// 		<header>
// 			<nav className="navbar navbar-expand-lg bg-nav fixed-top p-0 px-2">
// 				<div className="container-fluid">
// 					<a href="/" className="navbar-brand pt-2 ps-lg-5 ps-sm-2">
// 						<img src={Logo} alt="" id="logo" />
// 					</a>
// 					<button
// 						className="navbar-toggler"
// 						type="button"
// 						data-toggle="collapse"
// 						data-target="#navbarNav"
// 						aria-controls="navbarNav"
// 						aria-expanded="false"
// 						aria-label="Toggle navigation"
// 					>
// 						<span className="navbar-toggler-icon"> </span>
// 					</button>

// 					<div className="collapse navbar-collapse" id="navbarNav">
// 						<ul className="navbar-nav ms-auto">
// 							<li className="link nav-item pe-4">
// 								<a
// 									className="nav-link text-uppercase fw-semibold"
// 									href="#propos"
// 								>
// 									A propos
// 								</a>
// 							</li>
// 							<li className="link nav-item pe-4">
// 								<a
// 									className="nav-link text-uppercase fw-semibold"
// 									href="#portfolio"
// 								>
// 									Projets
// 								</a>
// 							</li>
// 							<li className="link nav-item pe-4">
// 								<a
// 									className="nav-link text-uppercase fw-semibold"
// 									aria-current="page"
// 									href="#parcours"
// 								>
// 									Parcours
// 								</a>
// 							</li>
// 							<li className="link nav-item pe-4">
// 								<a
// 									className="nav-link text-uppercase fw-semibold"
// 									href="#contact"
// 								>
// 									Contact
// 								</a>
// 							</li>
// 						</ul>
// 					</div>
// 				</div>
// 			</nav>
// 		</header>
// 	);
// };

// export default Navbar;

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "/img/logo-final2.webp";
import "./Navbar.css";
function NavbarConponent() {
	return (
		<Navbar
			collapseOnSelect
			expand="lg"
			// className="bg-body-tertiary"
			id="body-navbar"
		>
			<Container className="d-flex justify-content-between">
				<Navbar.Brand href="#home">
					<img src={Logo} alt="Logo" id="logo" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Link href="#propos" className="navLink">
							A Propos
						</Nav.Link>
						<Nav.Link href="#portfolio" className="navLink">
							Projets
						</Nav.Link>
						<Nav.Link href="#parcours" className="navLink">
							Parcours
						</Nav.Link>
						<Nav.Link href="#contact" className="navLink">
							Contact
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavbarConponent;

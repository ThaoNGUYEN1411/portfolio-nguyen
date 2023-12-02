// import ProjetLisaBeaute from "/img/lisabeaute.webp";
// import ProjetPromoSimplon from "/img/promoSimplon.webp";
// import ProjetNewStyle from "/img/projet1.webp";
import LogoHtml from "/img/html.webp";
import LogoCSS from "/img/css-removebg-preview.webp";
import LogoJs from "/img/js.webp";
import LogoReact from "/img/React-icon.svg.webp";
import LogoNode from "/img/node.webp";
import LogoGit from "/img/git-removebg-preview.webp";
import LogoWordPress from "/img/wp-removebg-preview.webp";
import LogoFigma from "/img/figma.webp";
import LogoPhotoshop from "/img/photoshop.webp";
import LogoBootstrap from "/img/Bootstrap.webp";
import Project from "./Project";

const Portfolio = () => {
	const dataP = [
		{
			id: 1,
			nameProject: "Lisa Beauté",
			detail: "Une application web pour présenter les produits de beauté.",
			img: "/img/lisabeaute.webp",
			video: "/video/lisaBeauteProjet.mp4",
			description:
				"Lisa Beauté est un site web dédié aux produits de beauté, offrant des informations claires et utiles. Explorez notre sélection, recherchez des produits par catégories, et partagez vos expériences en laissant des commentaires. Rejoignez notre communauté pour échanger des conseils et des astuces avec d'autres passionnés de beauté.",
			front: ["HTML", "CSS", "React"],
			back: ["Express", "Node.js", "SQL", "MySQL"],
			fonction: [
				"Créer un compte",
				"Connexion et déconnexion",
				"Itinéraires protégés",
				"Authentification",
				"Rechercher des produits rapidement avec une barre de recherche",
				"Catalogue de produits avec filtres",
				"Ajouter des avis, évaluations et commentaires sur un produit",
				"Ajouter et supprimer le produit favori",
			],
			linkGithub: "https://github.com/ThaoNGUYEN1411/projet-lisa-beaute.git",
			linkSite: "http://134.209.83.63/",
		},
		{
			id: 2,
			nameProject: "La promo du développeur web à Simplon",
			detail: "La présentation de notre membre dans ma classe",
			img: "/img/promoSimplon.webp",
			video: "/video/promoSimplon.mp4",
			description:
				"Le site permet de présenter les membres de ma classe, vous pouvez filtrer selon le type de travail que nous recherchons. Durant ma formation, il sert à présenter notre équipe et chercher un stage.",
			front: ["HTML", "CSS", "Bootstrap", "JavaScript"],
			fonction: [
				"Consulter la liste des apprenants et des formateurs",
				"Présenter le programme de la formation",
				"Filtrer les apprenants selon leur profil",
			],
			linkGithub: "https://github.com/ThaoNGUYEN1411/promo-simplon.git",
			linkSite: "https://thaonguyen1411.github.io/promo-simplon/",
		},
		{
			id: 3,
			nameProject: "Lisa Beauté",
			detail: "Une application web pour présenter les produits de beauté.",
			img: "/img/lisabeaute.webp",
			video: "/video/lisabeaute.mp4",
			description:
				"Lisa Beauté est un site web dédié aux produits de beauté, offrant des informations claires et utiles. Explorez notre sélection, recherchez des produits par catégories, et partagez vos expériences en laissant des commentaires. Rejoignez notre communauté pour échanger des conseils et des astuces avec d'autres passionnés de beauté.",
			front: ["HTML", "CSS", "React"],
			back: ["Express", "Node.js", "SQL", "MySQL"],
			fonction: [
				"Créer un compte",
				"Connexion et déconnexion",
				"Itinéraires protégés",
				"Authentification",
				"Rechercher des produits rapidement avec une barre de recherche",
				"Catalogue de produits avec filtres",
				"Ajouter des avis, évaluations et commentaires sur un produit",
				"Ajouter et supprimer le produit favori",
			],
			linkGithub: "https://github.com/ThaoNGUYEN1411/projet-lisa-beaute.git",
			linkSite: "http://134.209.83.63/",
		},
		// {
		// 	id: 3,
		// 	nameProject: "NewStyle",
		// 	detail: "Un site de journal sur les styles de la femme",
		// 	description: "Un site de journal sur les styles de la femme",
		// 	front: "[HTML, CSS]",
		// 	// fonction: "[a,b,c]",
		// 	linkGithub: "https://github.com/ThaoNGUYEN1411/NewStyle.github.io.git",
		// 	linkSite: "https://github.com/ThaoNGUYEN1411/NewStyle.github.io",
		// },
	];
	return (
		<div className="projet-tech container-fluid" id="lien-text">
			<section className="container" id="portfolio">
				<h2 className="text-center text-uppercase pb-3">Portfolio</h2>
				<Project dataProjects={dataP} />
			</section>
			{/* ---technique---- */}
			<section className="container mt-5" id="tech">
				<h3 className="text-center text-uppercase text-center mb-4">
					STACK TECHNIQUE
				</h3>
				<ul className="list-logo d-flex list-unstyled">
					<li>
						<img src={LogoHtml} alt="" className="logo-tech" />
					</li>
					<li>
						<img src={LogoCSS} alt="" className="logo-tech" />
					</li>
					<li>
						<img src={LogoJs} alt="" className="logo-tech" />
					</li>
					<li>
						<img src={LogoReact} alt="" className="logo-tech" />
					</li>
					<li>
						<img src={LogoNode} alt="" className="logo-tech" />
					</li>
					<li>
						<img src={LogoGit} alt="" className="logo-tech" />
					</li>
					<li>
						<img src={LogoWordPress} alt="" className="logo-tech" />
					</li>
					<li>
						<img src={LogoFigma} alt="" className="logo-tech" />
					</li>
					<li>
						<img src={LogoPhotoshop} alt="" className="logo-tech" />
					</li>
					<li>
						<img src={LogoBootstrap} alt="" className="logo-tech" />
					</li>
				</ul>
			</section>
		</div>
	);
};

export default Portfolio;

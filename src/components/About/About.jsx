import Accordion from "react-bootstrap/Accordion";
import ImageAbout from "/img/propos2.webp";

const About = () => {
	return (
		<section id="propos" className="mb-5">
			<div className="container mt-4 pt-4">
				<h2 className="text-center text-uppercase pb-3">A Propos</h2>
				<div className="row mt-4">
					<div className="col-lg-3 col-sm-12 text-center mb-4">
						<img
							src={ImageAbout}
							className="imageAboutPage"
							alt="illustration d'une developpeuse"
						/>
					</div>
					<div className="col-lg-9">
						<p>
							Avec une solide base en mathématiques et en logique, je suis
							sérieuse, rigoureuse et passionnée par la programmation. Après
							l'obtention du titre de Développeur Web Bac +2 lors d'une
							formation intensive de 7 mois en Développement Web et Web mobile,
							je poursuis ma formation en tant que "Concepteur Développeur
							d'Applications" chez Simplon. Les trois premiers mois intensifs de
							la formation visent à renforcer mes comprétences, suivis de 18
							mois en alternance.
							<br />
							Je suis à la recherche d'une entreprise accueillante pour une
							alternance débutant le 07 mars 2024, avec un rythme de 3 semaines
							en entreprise et une semaine à l'école. Convaincue que cette
							expérience sera l'occasion idéale de mettre en pratique mes
							compétences et de contribuer au succès de votre organisation.
						</p>
						<Accordion defaultActiveKey={["0"]} alwaysOpen>
							<Accordion.Item eventKey="0">
								<Accordion.Header>Langues</Accordion.Header>
								<Accordion.Body>
									<ul>
										<li>Français : Niveau avancé</li>
										<li>Anglais : Niveau intermédiaire</li>
										<li>Vietnamien : Langue maternelle</li>
									</ul>
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="1">
								<Accordion.Header>Centre d'intêret</Accordion.Header>
								<Accordion.Body>
									<ul>
										<li>Musique</li>
										<li>Yoga</li>
										<li>Lecture</li>
									</ul>
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;

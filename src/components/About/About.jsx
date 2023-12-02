import Accordion from "react-bootstrap/Accordion";
import ImageAbout from "/img/propos2.webp";

const About = () => {
	return (
		<section id="propos" className="mb-5">
			<div className="container mt-4 pt-4">
				<h2 className="text-center text-uppercase pb-3">A Propos</h2>
				<div className="row mt-4">
					<div className="col-lg-4">
						<img
							src={ImageAbout}
							className="imageAboutPage"
							alt="Developpeuse"
						/>
					</div>
					<div className="col-lg-8">
						<p>
							Avec une solide base en mathématiques et en logique, je suis
							sérieuse, rigoureuse et passionnée par la programmation. Après
							avoir obtenu le titre de Développeur Web Bac +2 lors d'une
							formation intensive de 7 mois chez Simplon, je me lance dans la
							formation "Concepteur Développeur d'Applications" chez Simplon.
							<br />
							Je suis à la recherche d'une entreprise accueillante pour un stage
							de 18 mois à partir du 11 mars 2024, avec un rythme de 3 semaines
							en entreprise et une semaine à l'école. Je suis convaincue que
							cette expérience sera l'occasion idéale de mettre en pratique mes
							compétences et de contribuer au succès de votre organisation.
						</p>
						{/* <div className="row mt-3">
							<div className="col-md-12">
								<ul>
									<li>Nom &amp; prénom: Thi Phuong Thao NGUYEN</li>
									<li>Age: 31</li>
									<li>Poste: Développeur Web</li>
								</ul>
							</div>
						</div> */}
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
						{/* <div className="mt-3">
							<div className="accordion" id="accor">
								<div className="accordion-item">
									<h2 className="accordion-header pt-0">
										<button
											className="accordion-button"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#collapseOne"
											aria-expanded="true"
											aria-controls="collapseOne"
										>
											Langues
										</button>
									</h2>
									<div
										id="collapseOne"
										className="accordion-collapse collapse show"
										data-bs-parent="#accordionExample"
									>
										<div className="accordion-body">
											<ul>
												<li>Français : Niveau avancé</li>
												<li>Anglais : Niveau intermédiaire</li>
												<li>Vietnamien : Langue maternelle</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="accordion-item">
									<h2 className="accordion-header pt-0">
										<button
											className="accordion-button collapsed"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#collapseTwo"
											aria-expanded="false"
											aria-controls="collapseTwo"
										>
											Centre d'intêret
										</button>
									</h2>
									<div
										id="collapseTwo"
										className="accordion-collapse collapse"
										data-bs-parent="#accordionExample"
									>
										<div className="accordion-body">
											<ul>
												<li>Musique</li>
												<li>Yoga</li>
												<li>Lecture</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div> */}
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;

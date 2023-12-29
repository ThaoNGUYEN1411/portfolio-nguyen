const Parcours = () => {
	return (
		<section id="parcours">
			<div className="container mt-4 pt-4">
				<h2 className="text-center text-uppercase pb-3 pb-4 mt-3">Parcours</h2>
				<div className="row">
					<div className="col-lg-6 border-end mb-5">
						<h3 className="text-danger text-center mb-4">Formation</h3>
						<article className="mt-3">
							<h4 className="h4-color">
								Simplon - Concepteur développeur d'applications
							</h4>
							<p>
								12/2023 - en cours (3 mois en formation intensif et 18 mois en
								alternance)
							</p>
							<ul>
								<li>Développer une application sécurisée</li>
								<li>
									Concevoir et développer une application sécurisée organisée en
									couches
								</li>
								<li>
									Contribuer à la mise en production dans une démarche DevOps
								</li>
								<span>
									Stack : Vue/Angular/React, Java/Spring boot, PostgreSQL,
									MongoDB
								</span>
							</ul>
						</article>
						<article className="mt-3">
							<h4 className="h4-color">
								Simplon - Formation Développeur Web et Web mobile
							</h4>
							<p>03/2023 - 10/2023</p>
							<ul>
								<li>Maquetter une application</li>
								<li>
									Développer une interface utilisateur web dynamique avec React.
								</li>
								<li>Mettre en place une base de données relationnelle SQL.</li>
								<li>Développer la partie back-end d'une application web.</li>
							</ul>
						</article>
						<article className="mt-3">
							<h4>Simplon - Formation développement web CMS</h4>
							<p>01/2023 - 03/2023</p>
							<p>Réaliser des applications web en utilisant WordPress</p>
						</article>
						<article className="mt-3">
							<h4>Free Compétence (Antony, France) - Certificat CLéA</h4>
							<p>03/2022 - 06/2022</p>
							<ul>
								<li>L’aptitude à travail en équipe, en autonomie.</li>
								<li>L’utilisation des outilles numérique.</li>
							</ul>
						</article>
						<article className="mt-3">
							<h4>Banking Academy of Vietnam</h4>
							<p>
								Diplôme licence finance et banque (Équivalent à un Bac +4,
								délivré par le centre ENIC-NARIC)
							</p>
							<p>Hanoi, Vietnam 2010 - 2014</p>
						</article>
					</div>
					<div className="col-lg-6 mb-5 ps-5">
						<h3 className="text-danger text-center mb-4">
							Parcours professionnel
						</h3>
						<article className="mt-3">
							<h4>Stage de développeur Web</h4>
							<p>PARIS, FRANCE| 05/2023 - 07/2023</p>
							<ul>
								<li>
									Contribuer à la création et à la mise en œuvre de nouvelles
									fonctionnalités pour les applications web en utilisant Angular
									et Node.js
								</li>
								<li>
									Participer à l'amélioration de l'interface utilisateur (UI) et
									du responsive du site.
								</li>
							</ul>
						</article>
						<article className="mt-3">
							<h4>Garde d'enfant à domicile</h4>
							<p>ANTONY, FRANCE| 09/2022 - 12/2015</p>
							<ul>
								<li>Récupérer les enfants à la sortie de l’école</li>
								<li>Organiser des activités ludiques</li>
							</ul>
						</article>
						<article className="mt-3">
							<h4>Gérante de mon propre magasin</h4>
							<p>INDEPENDANT| 2016 - 2021</p>
							<ul>
								<li>
									Organiser la boutique, renouveler régulièrement la
									présentation des articles
								</li>
								<li>Mise en place et suivi de vendre en ligne</li>
								<li>Gérer les stocks, superviser les inventaires</li>
							</ul>
						</article>
						<article className="mt-3">
							<h4>Conseillère clientèle</h4>
							<p>HDBANK, HANOI, VIETNAM| 2014 - 2015</p>
							<ul>
								<li>
									Gestion des clients, analyse de la situation du client, et
									proposition de produits financiers adaptés
								</li>
								<li>
									Étudier et analyser les bilans des entreprises clientes{" "}
								</li>
							</ul>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Parcours;

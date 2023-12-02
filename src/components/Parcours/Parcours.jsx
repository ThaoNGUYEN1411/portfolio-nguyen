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
								Simplon - Formation Développeur Web et Web mobile
							</h4>
							<p>03/2023 - 10/2023</p>
							<ul>
								<li>Maquetter une application</li>
								<li>
									Développer une interface utilisateur web dynamique avec React.
								</li>
								<li>Mettre en place une base de données relationnelle SQL.</li>
								<li>
									Développer des composants métier coté serveur avec Node.js
								</li>
							</ul>
						</article>
						<article className="mt-3">
							<h4>
								Simplon - Formation Préparation aux métiers du développeur Web
							</h4>
							<p>01/2023 - 03/2023</p>
							<p>
								Réaliser des applications web à l’aide d’un système de gestion
								de contenus (CMS).
							</p>
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
							<h4>Académie Bancaire</h4>
							<p>Diplôme licence finance et banque (Bac +4, Enic-naric)</p>
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
									Participer à l'amélioration de l'interface utilisateur (UI) et
									du responsive du site.
								</li>
								<li>
									Développement de fonctionnalités: Contribuer à la création et
									à la mise en œuvre de nouvelles fonctionnalités pour les
									applications web en utilisant Angular et Node.js
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
								<li>Commander la marchandise</li>
								<li>Gérer les stocks, superviser les inventaires</li>
								<li>
									Organiser la boutique, renouveler régulièrement la
									présentation des articles
								</li>
							</ul>
						</article>
						<article className="mt-3">
							<h4>Conseillère clientèle</h4>
							<p>HDBANK, HANOI, VIETNAM| 2014 - 2015</p>
							<ul>
								<li>
									Collecter des informations et analyser la situation financière
									des clients
								</li>
								<li>Étudier et analyser les bilans des entreprises clientes</li>
								<li>
									Participer au développement des nouveaux services en ligne
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

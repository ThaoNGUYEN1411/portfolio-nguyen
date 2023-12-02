import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
	const particlesInit = async (main) => {
		await loadFull(main);
	};
	const particlesLoaded = (container) => {};

	return (
		<Particles
			id="tsparticles"
			className="particles"
			init={particlesInit}
			loaded={particlesLoaded}
			options={{
				fullScreen: {
					enable: false,
				},
				fpsLimit: 60,
				interactivity: {
					events: {
						onClick: {
							enable: false,
						},
						onHover: {
							enable: false,
						},
						resize: false,
					},
				},
				particles: {
					// Vous pouvez définir la couleur des particules et leur opacité.
					color: {
						value: "#cacaca",
						opacity: 1,
					},
					// Vous pouvez définir les propriétés des liens entre les particules.
					links: {
						color: "#a7aaaa",
						distance: 200,
						enable: true,
						opacity: 0.4,
						width: 2.2,
					},
					// Vous pouvez activer ou désactiver les collisions entre les particules. (kich hoat hoac vo hieu hoa va cham)
					collisions: {
						enable: true,
					},
					//  Vous pouvez ajuster la densité et la quantité de particules.
					move: {
						direction: "none",
						enable: true,
						outModes: {
							default: "bounce",
						},
						random: true,
						speed: 0.4,
						straight: false,
					},
					number: {
						density: {
							enable: true,
							area: 900,
						},
						value: 70,
					},
					// Vous pouvez définir l'opacité des particules
					opacity: {
						value: 0.5,
					},
					// Vous pouvez définir la forme des particules
					shape: {
						type: "circle",
					},
					// Vous pouvez définir la taille des particules, avec des valeurs minimales et maximales.
					size: {
						value: { min: 0.1, max: 2 },
					},
				},
				detectRetina: true,
			}}
		/>
	);
}

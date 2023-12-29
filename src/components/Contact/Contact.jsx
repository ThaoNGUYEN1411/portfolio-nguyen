import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
// import {useForm} from react-hook-form;
import "./Contact.css";
import "leaflet/dist/leaflet.css";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
	const refForm = useRef();

	const sendEmail = (elm) => {
		elm.preventDefault();
		const nameUser = elm.target.name.value;
		const emailUser = elm.target.email.value;
		const messageSujet = elm.target.sujet.value;
		const messageReceive = elm.target.message.value;

		console.log(nameUser, emailUser, messageReceive, messageSujet);
		const templateParams = {
			to_name: nameUser,
			from_name: emailUser,
			sujet: messageSujet,
			message: messageReceive,
		};
		emailjs
			.send(
				"service_orwn3ni",
				"template_548zp9x",
				templateParams,
				"CobpUiWT8W_ddgSz6",
			)
			.then(
				(response) => {
					console.log("SUCCESS!");
				},
				(err) => {
					console.log("FAILED...");
				},
			);
	};
	return (
		<div className="bg-contact py-5" id="contact">
			<section className="contact-page container">
				<div className="text-center">
					<h2 className="text-uppercase">Contact</h2>
					<div className="info-contact">
						<p className="info pb-2">
							<span>Thao Nguyen</span>
							<span>
								<FontAwesomeIcon icon={faPhone} className="icon-contact" />
								06 79 40 73 83
							</span>
							<span>
								<FontAwesomeicon-contact
									icon={faEnvelope}
									className="icon-contact"
								/>
								phuongthaolyon@gmail.com
							</span>
						</p>
						{/* <p>
							N'hésitez pas à m'envoyer un message ou à me contacter si vous
							avez des questions,
							<br /> des opportunités de collaboration ou simplement pour
							échanger autour de nos passions communes.
							<br /> Je suis toujours ouverte à de nouvelles discussions et de
							nouvelles rencontres !
						</p> */}
					</div>
				</div>
				<div className="row">
					<div className="mt-2 col-lg-6 col-sm-6 col-sm-12">
						<form ref={refForm} onSubmit={sendEmail}>
							<ul className="pd-0 m-0 contact-form">
								<li className="half">
									<input
										type="text"
										name="name"
										placeholder="Votre nom"
										required
									/>
								</li>
								<li className="half">
									<input
										type="email"
										name="email"
										placeholder="Email"
										required
									/>
								</li>
								<li>
									<input
										type="text"
										name="sujet"
										placeholder="Sujet"
										required
									/>
								</li>
								<li>
									<textarea
										placeholder="Message"
										name="message"
										required
									></textarea>
								</li>
								<li className="text-center">
									<input
										type="submit"
										className="flat-button"
										value="Envoyer"
									/>
								</li>
							</ul>
						</form>
					</div>
					<div className="col-lg-6 col-sm-6 col-sm-12 mt-4">
						<div className="map-wrap">
							<MapContainer center={[48.828508, 2.2188068]} zoom={13}>
								<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
								<Marker position={[48.828508, 2.2188068]}>
									<Popup>Thao NGUYEN</Popup>
								</Marker>
							</MapContainer>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Contact;

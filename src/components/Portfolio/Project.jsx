import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import WhileHover from "../Aminations/WhileHover";
import { Container } from "react-bootstrap";

const Project = ({ dataProjects }) => {
	// showModal qui est un tableau de booléens, où chaque élément du tableau correspond à un projet et indique. La création du tableau avec fill(false)=>remplir assure que tous les modaux sont initialement fermés.
	const [showModal, setShowModal] = useState(
		new Array(dataProjects.length).fill(false),
	);
	const handleClose = (index) => {
		const newShowModal = [...showModal];
		newShowModal[index] = false;
		setShowModal(newShowModal);
	};

	const handleShow = (index) => {
		const newShowModal = [...showModal];
		newShowModal[index] = true;
		setShowModal(newShowModal);
	};

	return (
		<div className="row d-flex justify-content-between">
			{dataProjects.map((project, index) => {
				{
					console.log(project);
				}
				return (
					<div
						className="card col-lg-4"
						style={{ width: "25rem" }}
						key={project.id}
					>
						<WhileHover>
							<Button variant="" onClick={() => handleShow(index)}>
								<img
									src={`${project.img}`}
									className="card-img-top"
									alt="New style"
								/>
								<h5 className="card-title">{project.nameProject}</h5>
								<p>{project.detail}</p>
							</Button>
						</WhileHover>

						<Modal
							show={showModal[index]}
							onHide={() => handleClose(index)}
							size="lg"
						>
							<Modal.Header closeButton>
								<Modal.Title>{project.nameProject}</Modal.Title>
							</Modal.Header>
							<Modal.Body>
								<Container>
									{/* rome-ignore lint/a11y/useMediaCaption: <explanation> */}
									<video controls width="100%" height="auto">
										<source src={`${project.video}`} />
										Your browser does not support the video tag.
									</video>
								</Container>

								<p className="description p-2">{project.description}</p>
								<div className="technologie">
									<h4 className="px-2 pb-2">Front-end</h4>
									{project.front.map((tech) => {
										return (
											<span className="border px-3 xs:px-2 py-1 rounded shadow-sm mx-2">
												{tech}
											</span>
										);
									})}

									{project.back && <h4 className="p-2 pt-4">Back-end</h4>}
									{project.back?.map((tech) => {
										return (
											<span className="border px-3 xs:px-2 py-1 rounded shadow-sm mx-2">
												{tech}
											</span>
										);
									})}
								</div>
								{project.fonction && (
									<h4 className="p-2 pt-4">Fonctionnalités Clés </h4>
								)}
								<ul>
									{project.fonction.map((fonc) => {
										return <li>{fonc}</li>;
									})}
								</ul>
							</Modal.Body>

							<Modal.Footer>
								<Button
									variant="primary"
									onClick={() => handleClose(index)}
									href={project.linkGithub}
									target="_blank"
								>
									Code
								</Button>
								<Button
									variant="primary"
									onClick={() => handleClose(index)}
									href={project.linkSite}
									target="_blank"
								>
									Site Demo
								</Button>
							</Modal.Footer>
						</Modal>
					</div>
				);
			})}
		</div>
	);
};

export default Project;

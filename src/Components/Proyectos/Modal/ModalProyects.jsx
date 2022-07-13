import React from "react";
import { Image, Button, Modal } from "react-bootstrap";

function ModalProyectos({ data, onHide, show }) {
  const onClickWeb = () => {
    window.open(data.link, "_blank");
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {data?.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{<Image fluid src={data?.img} />}</h4>
        <p>{data?.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={() => onClickWeb()}>
          Visitar Web
        </Button>
        <Button onClick={onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalProyectos;

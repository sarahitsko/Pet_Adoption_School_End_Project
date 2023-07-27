import React, { useState, useContext } from "react";
import { Modal } from "react-bootstrap";
import "../App.css";
import { Button } from "react-bootstrap";
import EditCardModal from "../components/EditCardModal";
//import AppContext from "../context/AppContext";
import axios from "axios";

function FullDetailsModal({ card }) {
  //const { admin, cardInfo, setCardInfo } = useContext(AppContext);
  const [show, setShow] = useState(false);
  const [fullCard, setFullCard] = useState(card);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleFullDetails = async (e) => {
    try {
      const res = await axios.get(
        `http://localhost:8080/pets/${card._id}`,
        card,
        {
          withCredentials: true,
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Button
        className="more-detail-button"
        style={{
          backgroundColor: "#fff",
          boxShadow: "  5px 5px 15px 5px rgba(0, 0, 0, 0.25)",
          marginTop: "6%",
        }}
        variant="outline-dark"
        onClick={() => {
          handleFullDetails();
          handleShow();
        }}
      >
        More Details
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{card.name}'s Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>Type</h6>
          <p>{card.type}</p>
          <h6>Adoption Status</h6>
          <p>{card.adoptionStatus}</p>
          <h6>Height</h6>
          <p>{card.height}</p>
          <h6>Weight</h6>
          <p>{card.weight}</p>
          <h6>Color</h6>
          <p>{card.color}</p>
          <h6>Bio</h6>
          <p>{card.bio}</p>
          <h6>Hypoallergenic</h6>
          <p>{card.hypoallergenic}</p>
          <h6>Dietery</h6>
          <p>{card.dietery}</p>
          <h6>Breed</h6>
          <p>{card.breed}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
          <EditCardModal card={card} />
          {/* {admin && <EditCardModal />} */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FullDetailsModal;

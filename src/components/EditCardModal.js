import React, { useState, useContext } from "react";
import { Modal } from "react-bootstrap";
import "../App.css";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import AppContext from "../context/AppContext";
import { useLinkClickHandler } from "react-router-dom";

const EditCardModal = ({ card }) => {
  const { setCardInfo, cardInfo, updateCard, cardLits } =
    useContext(AppContext);

  const [editPetImage, setEditPetImage] = useState(cardInfo.imageUrl);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [prevCardInfo, setPrevCardInfo] = useState({ ...card });

  const handleEditCardInfo = (e) => {
    const updatedCardInfo = { ...prevCardInfo, [e.target.id]: e.target.value };
    setCardInfo(updatedCardInfo);
    setPrevCardInfo(updatedCardInfo);
  };

  const handleEditImage = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setEditPetImage(e.target.files[0]);
      console.log(e.target.files[0]);
    }
  };
  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    try {
      const updatedPet = new FormData();
      updatedPet.append("type", cardInfo.type);
      updatedPet.append("name", cardInfo.name);
      updatedPet.append("adoptionStatus", cardInfo.adoptionStatus);
      updatedPet.append("petImage", editPetImage);
      updatedPet.append("height", cardInfo.height);
      updatedPet.append("weight", cardInfo.weight);
      updatedPet.append("color", cardInfo.color);
      updatedPet.append("bio", cardInfo.bio);
      updatedPet.append("hypoallergenic", cardInfo.hypoallergenic);
      updatedPet.append(" dietaryRestrictions", cardInfo.dietery);
      updatedPet.append("breed", cardInfo.breed);

      const res = await axios.put(
        `http://localhost:8080/pets/${card._id}`,
        cardInfo,
        {
          withCredentials: true,
        }
      );
      updateCard(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const resetValues = () => {
    setCardInfo({ ...cardInfo });
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Pet Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmitEdit}>
            <Form.Control
              placeholder="Type"
              onChange={handleEditCardInfo}
              className="textInput"
              name="text"
              id="name"
              defaultValue={prevCardInfo.type}
            />
            <Form.Control
              placeholder="Pet's Name.."
              onChange={handleEditCardInfo}
              className="textInput"
              name="text"
              id="name"
              defaultValue={prevCardInfo.name}
            />
            <Form.Control
              placeholder="adoption Status.."
              className="textInput"
              onChange={handleEditCardInfo}
              rows={3}
              name="text"
              id="adoptionStatus"
              defaultValue={prevCardInfo.adoptionStatus}
            />
            <input type="file" accept="img/*" onChange={handleEditImage} />
            <Form.Control
              placeholder="height.."
              className="textInput"
              onChange={handleEditCardInfo}
              rows={3}
              name="text"
              id="height"
              defaultValue={prevCardInfo.height}
            />
            <Form.Control
              placeholder="weight.."
              className="textInput"
              onChange={handleEditCardInfo}
              rows={3}
              name="text"
              id="wheight"
              defaultValue={prevCardInfo.weight}
            />
            <Form.Control
              placeholder="color.."
              className="textInput"
              onChange={handleEditCardInfo}
              rows={3}
              name="text"
              id="color"
              defaultValue={prevCardInfo.color}
            />
            <Form.Control
              placeholder="bio.."
              className="textInput"
              onChange={handleEditCardInfo}
              rows={3}
              name="text"
              id="bio"
              defaultValue={prevCardInfo.bio}
            />
            <Form.Control
              placeholder="hypoallergenic.."
              className="textInput"
              onChange={handleEditCardInfo}
              rows={3}
              name="text"
              id="hypoallergenic"
              defaultValue={prevCardInfo.hypoallergenic}
            />
            <Form.Control
              placeholder="dietery.."
              className="textInput"
              onChange={handleEditCardInfo}
              rows={3}
              name="text"
              id="dietery"
              defaultValue={prevCardInfo.dietery}
            />
            <Form.Control
              placeholder="breed.."
              className="textInput"
              onChange={handleEditCardInfo}
              rows={3}
              name="text"
              id="breed"
              defaultValue={prevCardInfo.breed}
            />

            <Button type="submit" onClick={handleClose}>
              Save Changes
            </Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              handleClose();
              resetValues();
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditCardModal;

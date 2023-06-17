import React, { useState, useContext } from "react";
import AppContext from "../context/AppContext";
import "../App";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
// Pet details: Type (dog, cat), Name, Adoption Status, Picture, Height, Weight, Color, Bio, Hypoallergenic (yes/no), dietary restrictions, breed of animal (Poodle, Siamese)
function CardForm() {
  const { token, addCard, setCardInfo, cardInfo } = useContext(AppContext);
  const [petImage, setPetImage] = useState("");
  const handleCardInfo = (e) => {
    setCardInfo({ ...cardInfo, [e.target.id]: e.target.value });
  };

  const handleImage = (e) => {
    setPetImage(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const cardInfoData = new FormData();
      cardInfoData.append("type", cardInfo.type);
      cardInfoData.append("name", cardInfo.name);
      cardInfoData.append("adoptionStatus", cardInfo.adoptionStatus);
      cardInfoData.append("petImage", petImage);
      cardInfoData.append("height", cardInfo.height);
      cardInfoData.append("weight", cardInfo.weight);
      cardInfoData.append("color", cardInfo.color);
      cardInfoData.append("bio", cardInfo.bio);
      cardInfoData.append("hypoallergenic", cardInfo.hypoallergenic);
      cardInfoData.append(" dietaryRestrictions", cardInfo.dietery);
      cardInfoData.append("breed", cardInfo.breed);
      const res = await axios.post(`http://localhost:8080/pets`, cardInfoData, {
        withCredentials: true,
      });
      addCard(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="cardContainer">
      <form onSubmit={handleSubmit}>
        <Form.Control
          placeholder="Type(Dog/Cat)"
          onChange={handleCardInfo}
          value={cardInfo.type}
          className="textInput"
          name="type"
          id="type"
        />
        <Form.Control
          placeholder="Name of pet"
          onChange={handleCardInfo}
          value={cardInfo.name}
          className="textInput"
          name="name"
          id="name"
        />
        <Form.Control
          placeholder="Adoption Status.."
          onChange={handleCardInfo}
          value={cardInfo.adoptionStatus}
          className="textInput"
          name="adoptionStatus"
          id="adoptionStatus"
        />
        <input
          className="pet-image"
          type="file"
          accept="img/*"
          onChange={handleImage}
        />
        <Form.Control
          placeholder="Height"
          onChange={handleCardInfo}
          value={cardInfo.height}
          className="textInput"
          name="height"
          id="height"
        />
        <Form.Control
          placeholder="Weight"
          onChange={handleCardInfo}
          value={cardInfo.weight}
          className="textInput"
          name="weight"
          id="weight"
        />
        <Form.Control
          placeholder="Color"
          onChange={handleCardInfo}
          value={cardInfo.color}
          className="textInput"
          name="color"
          id="color"
        />
        <Form.Control
          placeholder="Bio"
          onChange={handleCardInfo}
          value={cardInfo.bio}
          className="textInput"
          name="bio"
          id="bio"
        />
        <Form.Control
          placeholder="Hypoallergenic:  Y/N"
          onChange={handleCardInfo}
          value={cardInfo.hypoallergenic}
          className="textInput"
          name="Hypoallergenic"
          id="hypoallergenic"
        />
        <Form.Control
          placeholder="dietaey"
          onChange={handleCardInfo}
          value={cardInfo.dietery}
          className="textInput"
          name="dietery"
          id="dietery"
        />
        <Form.Control
          placeholder="breed"
          onChange={handleCardInfo}
          value={cardInfo.breed}
          className="textInput"
          name="breed"
          id="breed"
        />

        <Button type="submit">Add Pet</Button>
      </form>
    </div>
  );
}

export default CardForm;

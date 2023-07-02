// Card component should display an image of the pet

import axios from "axios";
import "../App.css";
import "../Pages/PetPage.css";
import AppContext from "../context/AppContext";
import { GrFavorite } from "react-icons/gr";
import { FcLikePlaceholder } from "react-icons/fc";
import { MdOutlineDeleteForever } from "react-icons/md";
import React, { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import FullDetailsModal from "./fullDetails";
import { useLocation } from "react-router-dom";

function Card({ card }) {
  const {
    handleSavePet,
    savedPet,
    setSavedPet,
    handleGetPetById,
    currentUser,
    setDeleteSavedPet,
  } = useContext(AppContext);
  const location = useLocation();
  const current_page = location.pathname;
  const [currentStatus, setCurrentStatus] = useState(card.adoptionStatus || "");
  const [showLikeIcon, setShowLikeIcon] = useState(true);
  const [showDeleteIcon, setShowDeleteIcon] = useState(true);
  const [isLiked, setIsLiked] = useState(false);

  const handleLikePet = async (petId, userId) => {
    try {
      const savededPet = await axios.post(
        "http://localhost:8080/pets/save",
        { petId: card._id, userId: currentUser.id },

        { withCredentials: true }
      );
      setSavedPet(savededPet);
      setIsLiked(true);
      console.log(savededPet, "save");
    } catch (err) {
      console.log(err);
    }
  };
  const handleDeletePet = async (petId, userId) => {
    try {
      const deletedPet = await axios.delete(
        `http://localhost:8080/pets/${petId}/deletesave/${currentUser.id}`,
        { data: { userId: currentUser.id } },
        { withCredentials: true }
      );
      setDeleteSavedPet(deletedPet);
      setIsLiked(false);
      console.log(deletedPet, "deleted pet");
      console.log(currentUser.id);
    } catch (err) {
      console.log(err);
    }
  };
  const handleAdopt = async (e) => {
    let adoptionStatus;
    const res = await axios.post(
      `http://localhost:8080/pets/${card._id}/adopt`,
      { adoptionStatus: e.target.id },
      { withCredentials: true }
    );
    try {
      if (e.target.id === "Adopted") {
        adoptionStatus = "Adopted";
      } else if (e.target.id === "Fostered") {
        adoptionStatus = "Fostered";
      } else if (e.target.id === "return") {
        adoptionStatus = "Available";
      }
      if (res.data.ok) {
        setCurrentStatus(adoptionStatus);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div className="header">
        <div className="date"></div>
      </div>
      <div className="cardBody">
        {current_page === "/PetPage" && (
          <>
            {isLiked ? (
              <FcLikePlaceholder
                onClick={() => handleDeletePet(currentUser.id)}
              />
            ) : (
              <GrFavorite onClick={() => handleLikePet(card._id)} />
            )}
          </>
        )}
        {current_page === "/MyPetPage" && (
          <>
            {showDeleteIcon && (
              <MdOutlineDeleteForever
                onClick={() => handleDeletePet(card._id)}
              />
            )}
          </>
        )}
        <h3 className="pet-name">{card.name}</h3>
        <div className="pet-description">
          <p>{card.type}</p>
          <p>{card.adoptionStatus}</p>
        </div>
        <img className="pet-image" src={card.imageUrl} alt="Pet"></img>
        <div className="more-detailes-button">
          <FullDetailsModal card={card} savedPet={savedPet} />
        </div>
        {current_page === "/MyPetPage" && (
          <>
            {card.adoptionStatus === "Fostered" ? (
              <Button
                className="pets-botton"
                id="Return"
                onClick={(e) => {
                  handleGetPetById();
                  handleAdopt(e);
                }}
              >
                Return
              </Button>
            ) : null}

            {card.adoptionStatus === "Adopted" ? (
              <>
                <Button
                  className="pets-botton"
                  id="Return"
                  onClick={(e) => {
                    handleGetPetById();
                    handleAdopt(e);
                  }}
                >
                  Return
                </Button>
              </>
            ) : null}
          </>
        )}
        {card.adoptionStatus === "Available" ? (
          <div className="adoption-buttons">
            <Button
              className="pets-botton"
              id="Adopted"
              onClick={(e) => {
                handleGetPetById();
                handleAdopt(e);
                handleLikePet();
              }}
            >
              Adopt
            </Button>
            <Button
              className="pets-botton"
              id="Fostered"
              onClick={(e) => {
                handleGetPetById();
                handleAdopt(e);
                handleLikePet();
              }}
            >
              Foster
            </Button>
          </div>
        ) : null}
        {card.adoptionStatus === "Fostered" ? (
          <div className="adoption-buttons">
            <Button
              className="pets-botton"
              id="Adopted"
              onClick={(e) => {
                handleGetPetById();
                handleAdopt(e);
              }}
            >
              Adopt
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Card;

// Pet’s name
// Pet’s current status (foster/adopted)
// See more button (this button takes you to a full detailed description of the pet)

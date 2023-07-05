import Card from "../components/Card";
import Header from "../components/HeaderNav";
import { useState, useEffect, useContext } from "react";
import AppContext from "../context/AppContext";
import axios from "axios";
import "../../src/Pages/MyPetPage.css";
import "../../src/Pages/PetPage.css";
import { Button } from "react-bootstrap";
import "../App.css";
import "./MyPetPage.css";
import { Container, Row, Col } from "react-bootstrap";
import sadDog from "../images/sadDog.png";

// import PetSwiper from "swiper";

const MyPetPage = ({ cardList, card }) => {
  const [filteredCards, setFilteredCards] = useState([]);
  const {
    currentUser,
    savedPet,

    setSavedPet,
    token,
    setCurrentStatus,
    handleGetPetById,
  } = useContext(AppContext);

  const handleSavePet = (newPet) => {
    setSavedPet(newPet);
  };

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/pets/user/${currentUser.id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
            withCredentials: true,
          }
        );
        setSavedPet(res.data);
        handleGetPetById(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPet();
  }, []);

  useEffect(() => {
    if (Object.keys(savedPet).length > 0) {
      const savedPetIds = Object.values(savedPet).map((pet) => pet._id);
      setFilteredCards(
        cardList.filter((card) => savedPetIds.includes(card._id))
      );
    }
  }, [savedPet, cardList]);

  return (
    <>
      <Header />
      <Container className="myPet-container">
        <Row>
          {filteredCards.length > 0 ? (
            <div>
              {filteredCards.map((card) => (
                <Card
                  card={card}
                  handleGetPetById={handleGetPetById}
                  key={card.id}
                  md={3}
                  className="card-item"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    marginRight: "5px",
                    marginLeft: "5px",
                    marginTop: "30px",
                  }}
                />
              ))}
            </div>
          ) : (
            <>
              <p>You currently do not own or foster any pets </p>
              <div>
                {" "}
                <img src={sadDog} height="100vh" />
              </div>
            </>
          )}
        </Row>
      </Container>
    </>
  );
};

export default MyPetPage;

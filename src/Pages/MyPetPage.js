import Card from "../components/Card";
import Header from "../components/HeaderNav";
import { useState, useEffect, useContext } from "react";
import AppContext from "../context/AppContext";
import axios from "axios";
import { Button } from "react-bootstrap";
import "../App.css";
import "./MyPetPage.css";
import { Container, Row, Col } from "react-bootstrap";
import sadDog from "../images/sadDog.png";
import animalsHome from "../images/animalsHome.png";
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
      <div
        className="myPetPageImg"
        style={{ backgroundImage: `url(${animalsHome})` }}
      ></div>
      <div className="myPetPageImg">
        <Container>
          <Row>
            <h1>My Pet Page</h1>
            <div className="myPet-container">
              {filteredCards.length > 0 ? (
                <div>
                  {filteredCards.map((card) => (
                    <Col key={card._id} md={10}>
                      <div className="myPet-card">
                        <Card card={card} handleGetPetById={handleGetPetById} />
                      </div>
                    </Col>
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
            </div>
            <div></div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default MyPetPage;

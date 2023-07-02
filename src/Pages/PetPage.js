import Card from "../components/Card";
import "../App.css";
import "./PetPage.css";
import CardList from "../components/CardList";
import { useState, useEffect, useContext, useNevigate } from "react";
import AppContext from "../context/AppContext";
import axios from "axios";
// import PetSwiper from "../components/Swiper";
import Header from "../components/HeaderNav";
const PetPage = ({
  card,
  cardList,
  deleteCard,
  setSavedPet,
  savededPet,
  showLikeIcon,
}) => {
  const { handleSavePet, savedPet } = useContext(AppContext);

  return (
    <>
      <Header />
      <div className="PetPageMainContainer">
        {/* <PetSwiper cardList={cardList} /> */}
        <CardList
          card={card}
          cardList={cardList}
          deleteCard={deleteCard}
          handleSavePet={handleSavePet}
          savedPet={savedPet}
          setSavedPet={setSavedPet}
          savededPet={savededPet}
          showLikeIcon={true}
        />
      </div>
    </>
  );
};

export default PetPage;

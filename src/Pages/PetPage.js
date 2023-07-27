import Card from "../components/Card";
import "../App.css";
import "./PetPage.css";
import CardList from "../components/CardList";
import { useState, useEffect, useContext, useNevigate } from "react";
import AppContext from "../context/AppContext";
import axios from "axios";

import Header from "../components/HeaderNav";
const PetPage = ({
  card,
  cardList,
  deleteCard,
  setSavedPet,
  savededPet,
  showLikeIcon,
}) => {
  const {
    handleSavePet,
    savedPet,
    onLoadMore: handleLoadMore,
  } = useContext(AppContext);

  return (
    <>
      <Header />
      <div>
        <CardList
          card={card}
          cardList={cardList}
          deleteCard={deleteCard}
          onLoadMore={handleLoadMore}
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

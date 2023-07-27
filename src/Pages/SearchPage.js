import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import CardList from "../components/CardList";
import Header from "../components/HeaderNav";
import BasicSearch from "../components/BasicSearch";
import AdvanceSearch from "../components/AdvanceSearch.js";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

const SearchPage = ({ card }) => {
  const [changeSearch, setChangeSearch] = useState(true);
  const [search, setSearch] = useState("");
  const [showCards, setShowCards] = useState([]);
  const [selectedPetType, setSelectedPetType] = useState("");
  const [selectedPetStatus, setSelectedPetStatus] = useState("");
  const [selectedPetHeight, setSelectedPetHeight] = useState("");
  const [selectedPetWeight, setSelectedPetWeight] = useState([]);
  const [searchClicked, setSearchClicked] = useState(false);
  const [isAdvancedSearch, setIsAdvancedSearch] = useState(false);

  const handleChange = () => {
    return setChangeSearch(!changeSearch);
  };

  const toggleSearchMode = () => {
    setIsAdvancedSearch((prevIsAdvancedSearch) => !prevIsAdvancedSearch);
  };

  const handleSearch = async (callback) => {
    try {
      const res = await axios.get(`http://localhost:8080/pets/search/pet`);

      let filteredCards = res.data;
      if (selectedPetType) {
        filteredCards = filteredCards.filter(
          (card) => card.type === selectedPetType
        );
      }
      if (selectedPetWeight === "small") {
        filteredCards = filteredCards.filter((card) => card.weight <= 10);
      } else if (selectedPetWeight === "medium") {
        filteredCards = filteredCards.filter(
          (card) => card.weight >= 10 && card.weight <= 22
        );
      } else if (selectedPetWeight === "large") {
        filteredCards = filteredCards.filter((card) => card.weight >= 22);
      }
      if (selectedPetHeight === "short") {
        filteredCards = filteredCards.filter((card) => card.height <= 30);
      } else {
        if (selectedPetHeight === "high") {
          filteredCards = filteredCards.filter((card) => card.height > 30);
        }
      }
      if (selectedPetStatus) {
        filteredCards = filteredCards.filter(
          (card) => card.adoptionStatus === selectedPetStatus
        );
      }
      setShowCards(filteredCards);
      callback();
      console.log(filteredCards);
      console.log(selectedPetWeight);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header />
      <div className="search-page-container">
        <div className="search-header">
          {isAdvancedSearch ? (
            <>
              <div className="arrow-svg">
                <h1>Advanced Search</h1>
                <Link className="search_link" to="#" onClick={toggleSearchMode}>
                  Basic Search
                  <BsFillArrowLeftCircleFill />
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="arrow-svg">
                <h1>Basic Search</h1>
                <Link className="search_link" to="#" onClick={toggleSearchMode}>
                  Advanced Search
                  <BsFillArrowRightCircleFill />
                </Link>
              </div>
            </>
          )}
        </div>

        {isAdvancedSearch ? (
          <AdvanceSearch
            handleType={setSelectedPetType}
            handleStatus={setSelectedPetStatus}
            handleHeight={setSelectedPetHeight}
            handleWeight={setSelectedPetWeight}
          />
        ) : (
          <BasicSearch handleType={setSelectedPetType} />
        )}

        <div className="search-button">
          <Button
            variant="Info"
            onClick={() => handleSearch(() => setSearchClicked(true))}
            style={{ color: "#7FC9BF", fontWeight: "bold", fontSize: "20px" }}
            size="lg"
          >
            Search
          </Button>
        </div>
      </div>
      {searchClicked ? <CardList card={card} cardList={showCards} /> : null}
    </>
  );
};

export default SearchPage;

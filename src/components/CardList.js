import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "./Card";
import AppContext from "../context/AppContext";

const CardList = ({ cardList, savePet, card }) => {
  const { handleSavePet, savedPet, setSavedPet } = useContext(AppContext);

  return (
    <Container className="cardContainer">
      <Row className=" justify-content-md-center ">
        {cardList.map((card) => (
          <Col
            key={card.id}
            md="auto"
            className="card-item"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              marginRight: "5px",
              marginLeft: "5px",
              marginTop: "30px",
            }}
          >
            <Card card={card} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardList;

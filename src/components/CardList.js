import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "./Card";
import AppContext from "../context/AppContext";

const CardList = ({ cardList, savePet, card }) => {
  const { handleSavePet, savedPet, setSavedPet } = useContext(AppContext);

  return (
    <Container>
      <Row>
        {cardList.map((card) => (
          <Col key={card.id} md={3}>
            <Card card={card} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardList;

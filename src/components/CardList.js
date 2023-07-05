import React, { useState, useEffect, useContext, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "./Card";
import AppContext from "../context/AppContext";

const CardList = ({ cardList }) => {
  const { onLoadMore } = useContext(AppContext);
  const bottomElementRef = useRef(null);

  const handleIntersection = async (entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      console.log("Fetching more pets...");
      await onLoadMore(); // Assuming onLoadMore is an asynchronous function

      // Assuming you have access to the updated cardList in state
      console.log("Fetched pets count:", cardList.length);
    }
  };
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    });

    if (bottomElementRef.current) {
      observer.observe(bottomElementRef.current);
    }
    return () => {
      if (bottomElementRef.current) {
        observer.unobserve(bottomElementRef.current);
      }
      console.log("observer", onLoadMore);
    };
  }, [onLoadMore]);

  return (
    <Container className="cardContainer">
      <Row className="justify-content-md-center">
        {cardList.map((card, index) => (
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
            {index === cardList.length - 1 && (
              <div ref={bottomElementRef} style={{ height: "10px" }} />
            )}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardList;

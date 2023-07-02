// import React, { useState, useEffect, useContext } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import Card from "./Card";
// import AppContext from "../context/AppContext";
// import Swiper from "swiper";
// import "swiper/swiper-bundle.css";

// const PetSwiper = ({ cardList, handleGetPetById, handleAdopt }) => {
//   useEffect(() => {
//     new Swiper(".swiper-container", {
//       slidesPerView: "auto",
//       spaceBetween: 40,
//       centeredSlides: true,
//       autoplay: {
//         delay: 3000,
//         disableOnInteraction: false,
//       },
//       navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       },
//     });
//   }, []);

//   return (
//     <Container>
//       <Row>
//         <div className="swiper-container">
//           <div
//             className="swiper-button-prev"
//             style={{ color: " #6b5763" }}
//           ></div>
//           <div
//             className="swiper-button-next"
//             style={{ color: " #6b5763" }}
//           ></div>
//           <div className="swiper-wrapper">
//             {cardList.map((card) => (
//               <Col
//                 key={card.id}
//                 md={5}
//                 className="swiper-slide"
//                 style={{ backGroundColor: "transparent" }}
//               >
//                 <Card
//                   card={card}
//                   handleGetPetById={handleGetPetById}
//                   handleAdopt={handleAdopt}
//                 />
//               </Col>
//             ))}
//           </div>
//         </div>
//       </Row>
//     </Container>
//   );
// };

// export default PetSwiper;

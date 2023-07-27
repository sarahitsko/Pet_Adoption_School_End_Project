import AppContext from "../context/AppContext";
import Header from "../components/HeaderNav";
import { useNavigate, Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import "../App.css";
import "../Logget-out/Login";
import "../components.css";
import styles from "../Logget-out/styles.module.css";
import RandomImg from "../components/RandomImg";
import ReButton from "../components/ReButton";

const Home = (userInfo) => {
  const { currentUser, setCurrentUser } = useContext(AppContext);
  let navigate = useNavigate();

  const handleNavigatePetPage = () => {
    console.log("Navigating to petpage...");
    navigate("/petpage");
  };

  return (
    <>
      <Header />
      <div className={styles.home_page}>
        <div className={styles.mainDescription}>
          <div className={styles.text_description}>
            <p>Welcome to our pet adoption website!</p>

            <p>
              We offer a range of lovable cats and dogs that are waiting for
              their forever homes. Whether you're looking to adopt or foster,
              we're here to help. Our user-friendly website allows you to easily
              browse and search all available pets. If you're ready to make a
              difference in a pet's life, we make it easy to start the adoption
              or fostering process. And when the time comes, our simple return
              process ensures that all pets receive the care they need.{" "}
            </p>
            <p>Thank you for considering adopting a pet from us.</p>
            <div className={styles.start_button}>
              <ReButton text={"Get Start"} onClick={handleNavigatePetPage} />
            </div>
          </div>
        </div>
        <RandomImg />
      </div>
    </>
  );
};

export default Home;

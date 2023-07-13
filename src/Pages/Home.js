import AppContext from "../context/AppContext";
import Header from "../components/HeaderNav";
import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import "../App.css";
import "../Logget-out/Login";
import "../components.css";
import styles from "../Logget-out/styles.module.css";
import RandomImg from "../components/RandomImg";

const Home = (userInfo) => {
  const { currentUser, setCurrentUser } = useContext(AppContext);

  return (
    <>
      <Header />

      <div className={styles.mainDescription}>
        <span>Welcome to our pet adoption website!</span>
        <span>
          We offer a range of lovable cats and dogs that are waiting for their
          forever homes. Whether you're looking to adopt or foster, we're here
          to help. Our user-friendly website allows you to easily browse and
          search all available pets. If you're ready to make a difference in a
          pet's life, we make it easy to start the adoption or fostering
          process. And when the time comes, our simple return process ensures
          that all pets receive the care they need.
          <p>Thank you for considering adopting a pet from us.</p>
        </span>
      </div>
      <RandomImg />
    </>
  );
};

export default Home;

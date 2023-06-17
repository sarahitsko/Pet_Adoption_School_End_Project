import AppContext from "../context/AppContext";
import Header from "../components/HeaderNav";
import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import "../App.css";
import "../Logget-out/Login";
import axios from "axios";

const Home = (userInfo) => {
  const { currentUser, setCurrentUser } = useContext(AppContext);

  return (
    <>
      <Header />
    </>
  );
};

export default Home;

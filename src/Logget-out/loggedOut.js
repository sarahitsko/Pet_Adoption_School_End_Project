import SignUp from "./SignUp";
import Login from "./Login";
import { useState } from "react";
import axios from "axios";
import "../App";
import "../Logget-out/Logged-out.css";
import colorfulDogImage from "../images/colorful-dog.jpg";

// Logget out

// Creat Login/Signup button

//Header welcoming user to site

// text explaiming what service is

// Link to search bar
const LoggedOut = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    password: "",
    rePassword: "",
  });

  return (
    <>
      <div className="logged-out-container">
        <div id="logged-out-background-img">
          <img
            src={colorfulDogImage}
            alt="background-img"
            style={{ height: "70vh", width: "auto" }}
          />
        </div>
        <div className="text-wrapper-loggedout">
          <div className="main-description">
            <span>Welcome to our pet adoption website!</span>
            <span>
              We offer a range of lovable cats and dogs that are waiting for
              their forever homes. Whether you're looking to adopt or foster,
              we're here to help. Our user-friendly website allows you to easily
              browse and search all available pets. If you're ready to make a
              difference in a pet's life, we make it easy to start the adoption
              or fostering process. And when the time comes, our simple return
              process ensures that all pets receive the care they need. Thank
              you for considering adopting a pet from us.
            </span>
            <div className="login-signup">
              <Login />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoggedOut;

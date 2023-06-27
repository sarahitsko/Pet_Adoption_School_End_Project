import styles from "../Logget-out/styles.module.css";
import SignUp from "./SignUp";
import Login from "./Login";
import { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../App";

import colorfulDogImage from "../images/colorful-dog.jpg";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";

// Logget out

// Creat Login/Signup button

//Header welcoming user to site

// text explaiming what service is

// Link to search bar
const LoggedOut = () => {
  const { currentUser, setCurrentUser, token, LoginUser } =
    useContext(AppContext);
  const [userInfo, setUserInfo] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    password: "",
    rePassword: "",
  });
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [loggedOut, setLoggedOut] = useState("");
  let navigate = useNavigate();

  const handleShowLogin = () => {
    setShowLoginModal(false);
  };

  const handleCloseLogin = () => {
    setShowLoginModal(false);
  };

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  const handleSignUp = async (e) => {
    try {
      const res = await axios.post(
        `http://localhost:8080/users/signup`,
        userInfo,
        { withCredentials: true }
      );
      setUserInfo(res.data);
      navigate("/home");
      console.log(res.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <div className={styles.loggedOutContainer}>
        <div id={styles.loggedOutBackgroundImg}>
          <img
            src={colorfulDogImage}
            alt="background-img"
            style={{ height: "70vh", width: "auto" }}
          />
          <h1 className={styles.HeadlineLoggedout}>Pawsome Adoptions</h1>
        </div>
        <div className={styles.textWrapperLoggedout}>
          <div className={styles.mainDescription}>
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
            {!currentUser && !currentUser.name && (
              <div className={styles.mainLogin}>
                <SignUp
                  showSignUpModal={showSignUpModal}
                  setShowSignUpModal={setShowSignUpModal}
                  setShowLoginModal={setShowLoginModal}
                  handleChange={handleChange}
                  handleSignUp={handleSignUp}
                  userInfo={userInfo}
                />
                <Login
                  showLoginModal={showLoginModal}
                  setShowLoginModal={setShowLoginModal}
                  userInfo={userInfo}
                  setShowSignUpModal={setShowSignUpModal}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoggedOut;

import styles from "../Logget-out/styles.module.css";
import SignUp from "./SignUp";
import Login from "./Login";
import { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../App";
import pet_icon from "../svg/pet_icon.svg";
import pngwing from "../png/pngwing.png";
import colorfulDogImage from "../images/colorful-dog.jpg";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import Button from "react-bootstrap/Button";

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
  const [isSignUpButtonHovered, setIsSignUpButtonHovered] = useState(false);
  const [isLoginButtonHovered, setIsLoginButtonHovered] = useState(false);
  const [isContinueAsGuestButtonHovered, setIsContinueAsGuestButtonHovered] =
    useState(false);
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
      navigate("/");
      console.log(res.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleHoverSignUpButton = () => {
    setIsSignUpButtonHovered(true);
  };

  const handleHoverOutSignUpButton = () => {
    setIsSignUpButtonHovered(false);
  };

  const handleHoverLoginButton = () => {
    setIsLoginButtonHovered(true);
  };

  const handleHoverOutLoginButton = () => {
    setIsLoginButtonHovered(false);
  };

  const handleContinueAsGuest = () => {
    setIsContinueAsGuestButtonHovered(true);
  };

  const handleHoverOutContinueAsGuest = () => {
    setIsContinueAsGuestButtonHovered(false);
  };

  const handleNaviagte = () => {
    navigate("/");
  };

  return (
    <>
      <div className={styles.loggedOutContainer}>
        <div id={styles.loggedOutBackgroundImg}>
          <div className={styles.pngwing_png}>
            <img
              src={pngwing}
              alt="pngwing"
              style={{ height: "60vh", width: "60wh" }}
            />
          </div>
          <h1 className={styles.HeadlineLoggedout}>Pawsome Adoptions </h1>
        </div>
        <div className={styles.textWrapperLoggedout}>
          {!currentUser && !currentUser.name && (
            <div className={styles.mainLogin}>
              <div className={styles.signuplogin}>
                <SignUp
                  showSignUpModal={showSignUpModal}
                  setShowSignUpModal={setShowSignUpModal}
                  setShowLoginModal={setShowLoginModal}
                  handleChange={handleChange}
                  handleSignUp={handleSignUp}
                  userInfo={userInfo}
                  isSignUpButtonHovered={isSignUpButtonHovered}
                  handleHoverSignUpButton={handleHoverSignUpButton}
                  handleHoverOutSignUpButton={handleHoverOutSignUpButton}
                />
              </div>
              <div className={styles.signuplogin}>
                <Login
                  showLoginModal={showLoginModal}
                  setShowLoginModal={setShowLoginModal}
                  userInfo={userInfo}
                  setShowSignUpModal={setShowSignUpModal}
                  isLoginButtonHovered={isLoginButtonHovered}
                  handleHoverLoginButton={handleHoverLoginButton}
                  handleHoverOutLoginButton={handleHoverOutLoginButton}
                />
              </div>
              <div className={styles.signuplogin}>
                <Button
                  variant="outline-light"
                  style={{
                    color: "#302F2F",
                    border: "3px solid #302F2F",
                    fontSize: "20px",
                    fontWeight: "bold",
                    borderRadius: "15px",
                    padding: "1vh 5.4vw",
                    backgroundColor: isContinueAsGuestButtonHovered
                      ? "#FFF0C7"
                      : "#7FC9BF",
                  }}
                  onMouseEnter={handleContinueAsGuest}
                  onMouseLeave={handleHoverOutContinueAsGuest}
                  title="As a Guest you wont be able to save/ adopt/ foster your favorite pets"
                  onClick={handleNaviagte}
                >
                  Continue as a Guest
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default LoggedOut;

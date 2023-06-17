import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";
import Nav from "react-bootstrap/Nav";
import { useNavigate, Link } from "react-router-dom";
import { useContext, useState } from "react";
import { BsSearch } from "react-icons/bs";
import AppContext from "../context/AppContext";
import SignUp from "../Logget-out/SignUp";
import Login from "../Logget-out/Login";
import axios from "axios";
import "../App.css";

function Header({ handleShow }) {
  const { currentUser, userInfo, setUserInfo, setCurrentUser, token } =
    useContext(AppContext);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
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
    } catch (err) {
      console.log(err);
    }
  };

  const hendleLoggingOut = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get("http://localhost:8080/users/loggedout", {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.data.token) {
        localStorage.removeItem("token");
        localStorage.removeItem("currentUser");
        setCurrentUser("");
      }
    } catch (err) {
      console.log(err, err.message);
    }
  };

  return (
    <Nav fill variant="tabs" defaultActiveKey="/home">
      <div className="nav-container">
        <div className="linkNav">
          <NavItem>
            <NavLink
              as={Link}
              to="/home"
              style={{
                color: "#FFBEC3",
                textShadow:
                  "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
              }}
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              as={Link}
              to="/MyPetPage"
              eventKey="link-1"
              style={{
                color: "#FFBEC3",
                textShadow:
                  "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
              }}
            >
              My Pet Page
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              as={Link}
              to="/PetPage"
              eventKey="link-2"
              style={{
                color: "#FFBEC3",
                textShadow:
                  "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
              }}
              variant="outline-dark"
            >
              Pet Page
            </NavLink>
          </NavItem>
          <div className="search-container">
            <BsSearch
              className="svg-search"
              variant="primary"
              onClick={() => {
                navigate("/SearchPage");
              }}
            />
            <div className="search-text">Search</div>
          </div>
        </div>
        <div className="nav-end-contauner">
          <div className="fullName">
            {currentUser && currentUser.name && (
              <h5>Hello {currentUser.name}</h5>
            )}
          </div>
          {!currentUser && !currentUser.name && (
            <div className="main-login">
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
          {currentUser && currentUser.name && (
            <div className="link" onClick={hendleLoggingOut}>
              <Link to="/LoggedOut">Log Out</Link>
            </div>
          )}
        </div>
      </div>
    </Nav>
  );
}

export default Header;

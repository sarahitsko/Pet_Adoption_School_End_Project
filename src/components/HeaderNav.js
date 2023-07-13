import NavItem from "react-bootstrap/NavItem";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import { useNavigate, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import axios from "axios";
import "../App.css";

function Header({ handleShow }) {
  const { currentUser, setCurrentUser, token, userInfo } =
    useContext(AppContext);
  const [isHomeHovered, setIsHomeHovered] = useState(false);
  const [isMyPetPageHovered, setIsMyPetPageHovered] = useState(false);
  const [isPetPagesHovered, setIsPetPagesHovered] = useState(false);
  let navigate = useNavigate();

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

  const handleHoverHomeLink = () => {
    setIsHomeHovered(true);
  };

  const handleHoverHomeLinkOff = () => {
    setIsHomeHovered(false);
  };

  const handleHoverMyPetPageLink = () => {
    setIsMyPetPageHovered(true);
  };

  const handleHoverMyPetPageLinkOff = () => {
    setIsMyPetPageHovered(false);
  };

  const handleHoverPetPageLink = () => {
    setIsPetPagesHovered(true);
  };
  const handleHoverPetPageLinkOff = () => {
    setIsPetPagesHovered(false);
  };

  return (
    <Navbar
      expand="xxl"
      sticky="top"
      fill="true"
      variant="tabs"
      defaultActiveKey="/"
      bg="custom-color"
      style={{
        display: "flex",
        backgroundColor: "#302F2F",
        justifyContent: "space-between",
        border: "1px solid black",
      }}
    >
      <div className="linkNav">
        <Nav>
          <Nav.Link
            to="/"
            as={Link}
            style={{
              color: isHomeHovered ? "#FD97D8" : " #fff",
              fontSize: "20px",
              fontWeight: "bold",
            }}
            onMouseEnter={handleHoverHomeLink}
            onMouseLeave={handleHoverHomeLinkOff}
          >
            Home
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link
            as={Link}
            to="/mypetpage"
            eventKey="link-1"
            style={{
              color: isMyPetPageHovered ? "#FD97D8" : " #fff",
              fontSize: "20px",
              fontWeight: "bold",
            }}
            onMouseEnter={handleHoverMyPetPageLink}
            onMouseLeave={handleHoverMyPetPageLinkOff}
          >
            My Pet Page
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link
            as={Link}
            to="/petpage"
            eventKey="link-2"
            style={{
              color: isPetPagesHovered ? "#FD97D8" : " #fff",
              fontSize: "20px",
              fontWeight: "bold",
            }}
            onMouseEnter={handleHoverPetPageLink}
            onMouseLeave={handleHoverPetPageLinkOff}
            variant="outline-dark"
          >
            Pet Page
          </Nav.Link>
        </Nav>
      </div>
      <div className="nav-end-container">
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
        <div className="fullName">
          {currentUser && currentUser.name && <h5>Hello {currentUser.name}</h5>}
        </div>

        {currentUser && currentUser.name && (
          <div className="link" onClick={hendleLoggingOut}>
            <Link to="/loggedOut">Log Out</Link>
          </div>
        )}
      </div>
    </Navbar>
  );
}

export default Header;

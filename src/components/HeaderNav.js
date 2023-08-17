import NavItem from "react-bootstrap/NavItem";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import { useNavigate, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import "../App.css";
import UserMenu from "../components/UserMenu";

function Header() {
  const { currentUser, setCurrentUser, token } = useContext(AppContext);
  const [isHomeHovered, setIsHomeHovered] = useState(false);
  const [isMyPetPageHovered, setIsMyPetPageHovered] = useState(false);
  const [isPetPagesHovered, setIsPetPagesHovered] = useState(false);
  let navigate = useNavigate();

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
        backgroundColor: "#808080",
        justifyContent: "space-between",
        border: "1px solid black",
        boxShadow: " 0 0 30px rgba(0, 0, 0, 0.5)",
        padding: "0 15px",
      }}
    >
      <div className="linkNav">
        <Nav>
          <Nav.Link
            to="/"
            as={Link}
            style={{
              color: isHomeHovered ? "#000" : " #fff",
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
              color: isMyPetPageHovered ? "#000" : " #fff",
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
              color: isPetPagesHovered ? "#000" : " #fff",
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
            color="white"
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
          <div className="link">
            <UserMenu />
          </div>
        )}
      </div>
    </Navbar>
  );
}

export default Header;

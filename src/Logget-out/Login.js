import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import AppContext from "../context/AppContext";
import "../App.css";
import styles from "../Logget-out/styles.module.css";
import { useNavigate, Link } from "react-router-dom";

// 	Login Component (inside a modal):

// Email address
// Password

const Login = ({
  showLoginModal,
  setShowLoginModal,
  setShowSignUpModal,
  isLoginButtonHovered,
  handleHoverLoginButton,
  handleHoverOutLoginButton,
}) => {
  let navigate = useNavigate();
  const { email, password, LoginUser, setEmail, setPassword } =
    useContext(AppContext);
  const handleShowLogin = () => {
    setShowLoginModal(true);
  };

  const handleCloseLogin = () => {
    setShowLoginModal(false);
  };

  const handleLogin = async () => {
    LoginUser({ email, password });
    navigate("/");
  };
  const handleToggleSignUp = () => {
    setShowSignUpModal(true);
    setShowLoginModal(false);
  };

  return (
    <>
      <Button
        style={{
          color: "#302F2F",
          border: "3px solid #302F2F",
          fontSize: "20px",
          fontWeight: "bold",
          padding: "1vh 10vw",
          borderRadius: "15px",
          backgroundColor: isLoginButtonHovered ? "#431E57" : "transparent",
          color: isLoginButtonHovered ? "#fff" : "#302F2F",
        }}
        variant="outline-light"
        className="login"
        onClick={handleShowLogin}
        onMouseEnter={handleHoverLoginButton}
        onMouseLeave={handleHoverOutLoginButton}
      >
        Log In
      </Button>
      <Modal
        show={showLoginModal}
        onHide={handleCloseLogin}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Log in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control
              type="email"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <div>
            <p>
              Not a member?{" "}
              <button className="link" onClick={handleToggleSignUp}>
                Sign up
              </button>
            </p>
          </div>
          <Button
            style={{ backgroundColor: "#D91A5A" }}
            variant="outline-light"
            onClick={() => {
              handleLogin({ email, password });
              handleCloseLogin();
            }}
          >
            Log In
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Login;

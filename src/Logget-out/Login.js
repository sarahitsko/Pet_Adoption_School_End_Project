import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import AppContext from "../context/AppContext";
import "../App.css";
import "../Logget-out/Logged-out.css";
import { useNavigate, Link } from "react-router-dom";

// 	Login Component (inside a modal):

// Email address
// Password

const Login = ({ showLoginModal, setShowLoginModal, setShowSignUpModal }) => {
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

    console.log(typeof email);
    console.log(typeof password);
  };
  const handleToggleSignUp = () => {
    setShowSignUpModal(true);
    setShowLoginModal(false);
  };

  return (
    <>
      <Button
        style={{
          color: "#6B5763",
          border: "none",
        }}
        variant="outline-light"
        className="login"
        onClick={handleShowLogin}
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
            style={{ backgroundColor: "#6B5763" }}
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

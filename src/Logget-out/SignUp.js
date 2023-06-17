import Button from "react-bootstrap/Button";
import { FormControl } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import "../Logget-out/Logged-out.css";
import Login from "./Login";
import axios from "axios";

// Signup Component (inside a modal):

// Should take an email address
// Password (twice to make sure passwords match)
// First and last name
// Phone number

const SignUp = ({
  handleChange,
  handleSignUp,
  userInfo,
  setShowSignUpModal,
  showSignUpModal,
  setShowLoginModal,
}) => {
  const handleShowSignUp = () => {
    setShowSignUpModal(true);
  };

  const handleCloseSignUp = () => {
    setShowSignUpModal(false);
  };
  const navigate = useNavigate();

  const handleToggleLogin = () => {
    setShowLoginModal(true);
    setShowSignUpModal(false);
  };

  return (
    <>
      <Button
        style={{
          color: "#6B5763",
          border: "none",
        }}
        onClick={handleShowSignUp}
        variant="outline-light"
      >
        Sign Up
      </Button>

      <Modal
        show={showSignUpModal}
        onHide={handleCloseSignUp}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Personal Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-1" controlId="formBasicText" />
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter full name"
            name="name"
            onChange={handleChange}
            value={userInfo.name}
          />
          <Form.Label>Phone Number</Form.Label>
          <FormControl
            type="tel"
            placeholder="Enter phone number"
            name="phoneNumber"
            onChange={handleChange}
            value={userInfo.phoneNumber}
          />
          <Form.Group className="mb-1" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={handleChange}
              value={userInfo.email}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={userInfo.password}
              />
              <Form.Label>Re-Password</Form.Label>
              <Form.Control
                type="Password"
                placeholder="re-Password"
                name="rePassword"
                onChange={handleChange}
                value={userInfo.rePassword}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <div>
              <p>
                Not a member?{" "}
                <button className="link" onClick={handleToggleLogin}>
                  Log In
                </button>
              </p>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{ backgroundColor: "#6B5763" }}
            variant="outline-light"
            onClick={() => {
              handleCloseSignUp();
              handleSignUp();
              navigate("/login");
            }}
          >
            Sign-Up
          </Button>
          <Button
            style={{ backgroundColor: "#757575" }}
            variant="secondary"
            onClick={handleCloseSignUp}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SignUp;

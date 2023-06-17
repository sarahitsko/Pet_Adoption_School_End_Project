import React, { useState, useContext } from "react";
import AppContext from "../context/AppContext";
import "../App";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

function CardForm() {
  const { setUserInfo, userInfo } = useContext(AppContext);

  const handleUserInfo = (e) => {
    setUserInfo({ ...userInfo, [e.target.id]: e.target.value });
  };

  const handleImage = (e) => {
    setUserImage(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userInfoData = new FormData();

      userInfoData.append("name", userInfo.name);
      userInfoData.append("phone", userInfo.phone);
      userInfoData.append("phoneImage", phoneImage);
      userInfoData.append("email", userInfo.email);

      const res = await axios.post(
        `http://localhost:8080/users`,
        userInfoData,
        {
          withCredentials: true,
        }
      );
      editUser(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <Form.Control
          placeholder="Name"
          onChange={handleUserInfo}
          value={userInfo.name}
          className="textInput"
          name="name"
          id="name"
        />
        <Form.Control
          placeholder="Phone"
          onChange={handleUserInfo}
          value={userInfo.phone}
          className="textInput"
          name="phone"
          id="phone"
        />
        <input type="file" accept="img/*" onChange={handleImage} />
        <Form.Control
          placeholder="Email"
          onChange={handleUserInfo}
          value={userInfo.email}
          className="textInput"
          name="email"
          id="email"
        />

        <Button type="submit">Edit User</Button>
      </form>
    </div>
  );
}

export default CardForm;

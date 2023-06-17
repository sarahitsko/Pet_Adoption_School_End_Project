import axios from "axios";
import "../App.css";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

function User({ user }) {
  const handleUserId = async (e) => {
    try {
      const res = await axios.get(
        `http://localhost:8080/user/${user._id}`,
        user,
        {
          withCredentials: true,
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="card p-2 my-2">
      <div className="header">
        <div className="date"></div>
      </div>

      <div className="cardBody">
        <h3>{user.name}</h3>
        <p>{user.phoneNumber}</p>
        <p>{user.email}</p>
      </div>
    </div>
  );
}

export default User;

// Pet’s name
// Pet’s current status (foster/adopted)
// See more button (this button takes you to a full detailed description of the pet)

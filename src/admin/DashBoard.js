// List of all the users in the database (pet owners and administrators)
// Clicking on a user should display all the pets that the user owns along with all of their profile details
// so the administrators can contact the user.

// List of all pets and ability to go to the pet page and edit.
// (The edit should be just like adding a pet but with the details already displayed there)

import User from "../admin/User";
import "../App.css";
import UserList from "../admin/UserList";
import { useState, useEffect } from "react";
import axios from "axios";

const DashBoard = ({ user, userList }) => {
  return (
    <div className="mainContainer">
      <UserList user={user} userList={userList} />
    </div>
  );
};

export default DashBoard;

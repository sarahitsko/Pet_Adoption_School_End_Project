import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import axios from "axios";
import styles from "../Logget-out/styles.module.css";
import ReButton from "../components/ReButton";
import HeaderNav from "../components/HeaderNav";
import EditProfileModal from "../components/EditProfileModal";
import User from "../admin/User";
import UserForm from "../admin/UserForm";

const UserProfile = () => {
  const { userInfo, setUserInfo, currentUser } = useContext(AppContext);
  const [userImage, setUserImage] = useState(null);
  const editProfile = async (e) => {
    try {
      const res = await axios.put(
        `http://localhost:8080/users/${currentUser.userId}/edit`,
        userInfo,
        {
          withCredentials: true,
        }
      );
      setUserInfo(res.data);
    } catch (err) {
      console.log(err.message);
    }
  };
  const handleUserInfo = (e) => {
    setUserInfo({ ...userInfo, [e.target.id]: e.target.value });
  };

  const handleUserImage = (e) => {
    setUserImage(e.target.files[0]);
  };

  return (
    <>
      <HeaderNav />
      <div className="current-user-container">
        <div className="current-user-profile">
          <div className="current-user-profile-item">
            <img src={currentUser.profileImg} alt="user-avatar" />
          </div>
          <div className="current-user-profile-item">
            <h2>Name:</h2>
            <h3>{currentUser.name}</h3>
          </div>
          <div className="current-user-profile-item">
            <h2>E-mail: </h2> <h3>{currentUser.email}</h3>
          </div>
          <div className="current-user-profile-item">
            {currentUser.phone ? (
              <>
                <h2>Phone Number:</h2>
                <h3>{currentUser.phone}</h3>
              </>
            ) : null}
          </div>
        </div>
      </div>
      <div className="edit-profile">
        <EditProfileModal editProfile={editProfile} />
      </div>
    </>
  );
};

export default UserProfile;

import { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ReButton from "./ReButton";
import AppContext from "../context/AppContext";
import axios from "axios";

const EditProfileModal = ({ editProfile }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { currentUser, userInfo, setUserInfo } = useContext(AppContext);

  const handleUserInfo = (e) => {
    setUserInfo({ ...userInfo, [e.target.id]: e.target.value });
  };

  return (
    <>
      <ReButton text=" Edit Profile" onClick={handleShow}></ReButton>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Personal Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <input
              placeholder={currentUser.name}
              type="text"
              id="fullName"
              onChange={handleUserInfo}
            />
            <input
              placeholder={currentUser.phone ? currentUser.phone : "Phone"}
              type="text"
              id="New Phone Number"
              onChange={handleUserInfo}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              editProfile();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditProfileModal;

import "../components.css";
import user from "../svg/user.svg";
import { Dropdown } from "react-bootstrap";
import LogOut from "./LogOut";

const UserMenu = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="none" id="dropdown">
        <img src={user} alt="user" style={{ width: "30px", height: "30px" }} />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/userprofile">Profile</Dropdown.Item>
        <Dropdown.Item href="#/action-1">
          <LogOut />
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
export default UserMenu;

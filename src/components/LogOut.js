import user from "../svg/user.svg";
import axios from "axios";
import { useContext } from "react";
import AppContext from "../context/AppContext";

const LogOut = () => {
  const { currentUser, setCurrentUser, token } = useContext(AppContext);

  const hendleLoggingOut = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get("http://localhost:8080/users/loggedout", {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.data.token) {
        localStorage.removeItem("token");
        localStorage.removeItem("currentUser");
        setCurrentUser("");
      }
    } catch (err) {
      console.log(err, err.message);
    }
  };
  return (
    <>
      <div onClick={hendleLoggingOut}>Log out</div>
    </>
  );
};

export default LogOut;

import Header from "./components/HeaderNav";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import PetPage from "./Pages/PetPage";
import MyPetPage from "./Pages/MyPetPage";
import Login from "./Logget-out/Login";
import SignUp from "./Logget-out/SignUp";
import Home from "./Pages/Home";
import LoggedOut from "./Logget-out/loggedOut";
import AdminPage from "./admin/AdminPage";
import SearchPage from "./Pages/SearchPage";
import DashBoard from "./admin/DashBoard";
import "./App.css";
import "./index.css";
import React from "react";
import AppContext from "./context/AppContext";
import { useState, useEffect, useContext } from "react";
import axios from "axios";

//Home page logged in
const App = ({ card }) => {
  const [cardList, setCardList] = useState([]);
  const [userList, setUserList] = useState([]);
  const [savedPet, setSavedPet] = useState([{}]);
  const [deleteSavedPet, setDeleteSavedPet] = useState([{}]);
  const [admin, setAdmin] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  // const [currentUser, setCurrentUser] = useState(
  //   JSON.parse(localStorage.getItem("currentUser")) || {}
  // );
  const [currentUser, setCurrentUser] = useState("");
  const [email, setEmail] = useState("");
  const [petById, setPetById] = useState([]);

  const [password, setPassword] = useState([]);
  const [userInfo, setUserInfo] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [cardInfo, setCardInfo] = useState({
    type: "",
    name: "",
    adoptionStatus: "",
    imageUrl: "",
    height: "",
    weight: "",
    color: "",
    bio: "",
    hypoallergenic: "",
    dietery: "",
    breed: "",
  });

  const LoginUser = async () => {
    try {
      const userInfo = {
        email,
        password,
      };

      const res = await axios.post(
        "http://localhost:8080/users/login",
        userInfo,
        { withCredentials: true }
      );
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem(
          "currentUser",
          JSON.stringify(res.data || currentUser)
        );
        setToken(res.data.token);
        setCurrentUser(res.data || currentUser);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedCurrentUser = localStorage.getItem("currentUser");
    if (storedToken) {
      setToken(storedToken);
    }
    if (storedCurrentUser) {
      setCurrentUser(JSON.parse(storedCurrentUser));
    }
  }, []);

  const fetchCards = async () => {
    try {
      const res = await axios.get("http://localhost:8080/pets", {
        withCredentials: true,
      });
      setCardList(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  const addCard = (newCard) => {
    const newCardsArray = [...cardList, newCard];
    setCardList(newCardsArray);
  };

  const updateCard = (updatedCard) => {
    const newArray = [...cardList, updatedCard];
    setCardList(newArray);
  };

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8080/users", {
        withCredentials: true,
      });
      setUserList(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSavePet = (savedPet) => {
    setSavedPet([...savedPet, savedPet]);
  };

  const handleGetPetById = async (e) => {
    try {
      const res = await axios.get(
        `http://localhost:8080/pets/${card._id}`,

        {
          withCredentials: true,
        }
      );
      setPetById(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    // Header welcoming user by their first and last name

    <>
      <AppContext.Provider
        value={{
          cardList,
          addCard,
          updateCard,
          setToken,
          setCurrentUser,
          currentUser,
          token,
          cardInfo,
          userInfo,
          setUserInfo,
          setCardInfo,
          admin,
          setEmail,
          setPassword,
          LoginUser,
          handleSavePet,
          setSavedPet,
          savedPet,
          handleGetPetById,
          petById,
          email,
          setEmail,
          setPassword,
          password,
          setDeleteSavedPet,
        }}
      >
        <BrowserRouter>
          {/* private routes for home,petpage, my page.... when logout- dekete the token from local storage */}
          <Routes>
            <Route path="/LoggedOut" element={<LoggedOut />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/SearchPage" element={<SearchPage />} />
            <Route
              path="/PetPage"
              element={
                <PetPage
                  card={card}
                  cardList={cardList}
                  fetchCards={fetchCards}
                  addCard={addCard}
                  handleSavePet={setSavedPet}
                />
              }
            />
            <Route
              path="/MyPetPage"
              element={<MyPetPage cardList={cardList} card={card} />}
            />
            <Route path="/AdminPage" element={<AdminPage />} />
            <Route
              path="/dashboard"
              element={
                <DashBoard userList={userList} fetchUsers={fetchUsers} />
              }
            />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </>
  );
};

// Search button (can either be a link to search page or open modal of search component)
//Create SerchBar(Modal)
//handleClickSerch

// Has access to navigate to profile settings
//routes-route: petPage, PrifileSetting,My pets Page(link)

//Add admin page link ?? (I think that the admin page link sholud be somewhere else)
export default App;

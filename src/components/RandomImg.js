import { useState, useEffect } from "react";
import axios from "axios";
import "../components.css";
import Avatar from "react-avatar";

const RandomImg = () => {
  const [randomImg, setRandomImg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchRandomImage = async () => {
    try {
      const res = await axios.get("http://localhost:8080/pets/images/random", {
        withCredentials: true,
      });
      console.log(res.data.imageUrl);
      setRandomImg(res.data.imageUrl);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchRandomImage();
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="random_img">
        {randomImg ? (
          <Avatar src={randomImg} alt="random image" size="200" round={true} />
        ) : (
          <p>Loading image...</p>
        )}
      </div>
    </>
  );
};

export default RandomImg;

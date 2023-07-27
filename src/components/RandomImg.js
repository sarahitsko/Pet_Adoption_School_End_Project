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
      <div className="img_container">
        <div className="random_img">
          {randomImg ? (
            <Avatar
              src={randomImg}
              alt="random image"
              size="250"
              round={true}
              style={{ border: "2px solid #ccc", boxShadow: "0 0 10px #000" }}
            />
          ) : (
            <p>Loading image...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default RandomImg;

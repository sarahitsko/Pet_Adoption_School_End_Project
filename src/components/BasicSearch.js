import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useState } from "react";
import cattosearch from "../../src/svg/cattosearch.svg";
import dogtosearch from "../../src/svg/dogtosearch.svg";

function BasicSearch({ handleType }) {
  const [selectedType, setSelectedType] = useState(null);

  const handleSelectedType = async (type) => {
    try {
      handleType(type);
      setSelectedType(type);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="search-type">
        <div className="search-type-dog">
          <img
            src={dogtosearch}
            alt="dog"
            onClick={() => handleSelectedType("Dog")}
            style={{
              width: "80px",
              height: "80px",
              border: selectedType === "Dog" ? "3px solid #302F2F" : "none",
              borderRadius: "10%",
            }}
          />
        </div>
        <div className="search-type-cat">
          <img
            src={cattosearch}
            alt="cat"
            onClick={() => handleSelectedType("Cat")}
            style={{
              width: "80px",
              height: "80px",
              border: selectedType === "Cat" ? "3px solid #302F2F" : "none",
              borderRadius: "10%",
            }}
          />
        </div>
      </div>
    </>
  );
}

export default BasicSearch;

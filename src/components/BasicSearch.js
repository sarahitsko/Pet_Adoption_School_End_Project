import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useState } from "react";

function BasicSearch({ handleType }) {
  const handleSelectedType = async (type) => {
    try {
      handleType(type);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <DropdownButton
      id="dropdown-basic-button"
      variant="Info"
      title="Type"
      className="search-button"
    >
      <Dropdown.Item
        href="#/action-1"
        onClick={() => handleType("Dog")}
        key="dog"
      >
        Dog
      </Dropdown.Item>
      <Dropdown.Item
        href="#/action-2"
        onClick={() => handleType("Cat")}
        key="cat"
      >
        Cat
      </Dropdown.Item>
      <Dropdown.Item
        href="#/action-3"
        onClick={() => handleType("Else")}
        key="else"
      >
        Something else
      </Dropdown.Item>
    </DropdownButton>
  );
}

export default BasicSearch;

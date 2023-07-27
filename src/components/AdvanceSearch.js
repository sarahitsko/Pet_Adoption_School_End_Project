import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useState } from "react";
import BasicSearch from "./BasicSearch";
import sizepet from "../svg/sizepet.svg";
//Can search based on Adoption Status, Height, Weight, Type, Name

const AdvanceSearch = ({
  handleType,
  handleStatus,
  handleHeight,
  handleWeight,
  setSelectedPetStatus,
}) => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const handleSelectedType = async (type) => {
    try {
      handleType(type);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSelectStatus = async (status) => {
    try {
      setSelectedPetStatus(status);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSelectHeight = async (height) => {
    try {
      setHeight(height);
      handleHeight(height);
    } catch (err) {
      console.log(err);
    }
  };
  const handleSelectWeight = async (weight) => {
    try {
      setWeight(weight);
      handleWeight(weight);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="advenced">
        <input type="text" placeholder="Name" className="search-by-name" />
        <BasicSearch handleType={handleType} />

        <DropdownButton
          className="DropdownButton d-flex justify-content-center"
          id="dropdown-basic-button"
          variant="Info"
          title="Adoption Status"
          size="lg"
        >
          <Dropdown.Item
            href="#/action-1"
            onClick={() => handleStatus("Available")}
            key="available"
          >
            Available
          </Dropdown.Item>
          <Dropdown.Item
            href="#/action-2"
            onClick={() => handleStatus("Adopted")}
            key="adopted"
          >
            Adopted
          </Dropdown.Item>
          <Dropdown.Item
            href="#/action-3"
            onClick={() => handleStatus("Fostered")}
            key="fostered"
          >
            Fostered
          </Dropdown.Item>
        </DropdownButton>
        <div className="sizepet">
          <div className="sizepet-small">
            <img
              src={sizepet}
              alt="sizepet"
              style={{ height: "8vh", weight: "8vw" }}
              onClick={() => {
                handleSelectHeight("short");
                handleSelectWeight("small");
              }}
            />

            <p>S</p>
          </div>
          <div className="sizepet-medium">
            <img
              src={sizepet}
              alt="sizepet"
              style={{ height: "12vh", weight: "12vw" }}
              onClick={() => {
                handleSelectHeight("high");
                handleSelectWeight("medium");
              }}
            />
            <p>M</p>
          </div>
          <div className="sizepet-large">
            <img
              src={sizepet}
              alt="sizepet"
              style={{ height: "16vh", weight: "16vw" }}
              onClick={() => {
                {
                  handleSelectHeight("high");
                  handleSelectWeight("large");
                }
              }}
            />
            <p>L</p>
          </div>
        </div>

        {/* <DropdownButton
          className="DropdownButton"
          id="dropdown-basic-button"
          variant="Info"
          size="lg"
          title="Height"
        >
          <Dropdown.Item
            href="#/action-1"
           
            key="short"
          >
            10cm - 30cm
          </Dropdown.Item>
          <Dropdown.Item
            href="#/action-2"
            onClick={() => handleSelectHeight("high")}
            key="high"
          >
            30cm and higher
          </Dropdown.Item>
        </DropdownButton>

        <div></div>

        <DropdownButton
          className="DropdownButton"
          id="dropdown-basic-button"
          variant="Info"
          size="lg"
          title="Weight"
        >
          <Dropdown.Item
            href="#/action-1"
            onClick={() => handleSelectWeight("small")}
            key="small"
          >
            Small(up to 10Kg)
          </Dropdown.Item>
          <Dropdown.Item
            href="#/action-2"
            onClick={() => handleSelectWeight("medium")}
            key="med"
          >
            medium,(between 10Gg - 22Kg)
          </Dropdown.Item>
          <Dropdown.Item
            href="#/action-3"
            onClick={() => handleSelectWeight("large")}
            key="large"
          >
            Large, (22Kg anf higher)
          </Dropdown.Item>
        </DropdownButton>*/}
      </div>
    </>
  );
};

export default AdvanceSearch;

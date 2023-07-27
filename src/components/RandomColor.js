import { useState } from "react";

const RandomColor = () => {
  const [color, setColor] = useState("");
  const generateColor = () => {
    const colors = [
      "#1D69A5",
      "#006458",
      "#808080",
      "#0DAC99",
      "#cccccc",
      "#009CD6",
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    setColor(colors[randomIndex]);
  };
  return { color, generateColor };
};
export default RandomColor;

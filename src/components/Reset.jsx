import React from "react";
import "./reset.css";

const Reset = ({setSquare, setWinner, setIsPlayer}) => {
  const reset = () => {
    setSquare(Array(3).fill(Array(3).fill("")));
    setWinner("None");
    setIsPlayer(true);
  };

  return (
    <div className="reset">
      <button type="reset" onClick={reset}>RESET</button>
    </div>
  );
};

export default Reset;

import React, { useState } from "react";
import "./game.css";
import Board from "./Board";
import Reset from "./Reset";

const Game = () => {
  const [square, setSquare] = useState(Array(3).fill(Array(3).fill("")));
  const [isPlayer, setIsPlayer] = useState(true);
  const [winner, setWinner] = useState("None");

  const handleClick = (row, col) => {
    if(square[row][col] === "" && winner === "None"){
    const newBlock = square.map((r) => [...r]);
    newBlock[row][col] = isPlayer ? "X" : "O";
    setSquare(newBlock);
    setIsPlayer(!isPlayer);
    const win = calculateWinner(row, col, newBlock);
    if(win !== "None"){
    setWinner(win);
    }
    }
  }

  const calculateWinner = (row, col, data) => {
    if (data[row] && data[row][col] !== "") {
      if (data[row][0] === data[row][1] && data[row][1] === data[row][2]) {
        return data[row][0];
      }
      if (data[0][col] === data[1][col] && data[1][col] === data[2][col]) {
        return data[0][col];
      }
      if (
        data[0][0] !== "" &&
        data[0][0] === data[1][1] &&
        data[1][1] === data[2][2]
      ) {
        return data[0][0];
      }

      if (
        data[0][2] !== "" &&
        data[0][2] === data[1][1] &&
        data[1][1] === data[2][0]
      ) {
        return data[0][2];
      }
    }
    return "None";
  };

  return (
    <div>
        <div className="content">
        {"Next player:"} <span className="players">{isPlayer ? "X" : "O"}</span>
        </div>
        <div className="content">
        {"Winner: "}<span className="players">{winner}</span>
        </div>
      <Board squareData={square} updateSquareData={setSquare}  clicked={handleClick} />

      <Reset setSquare={setSquare} setWinner={setWinner} setIsPlayer={setIsPlayer} />
    </div>
  );
};

export default Game;

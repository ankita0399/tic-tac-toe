import React, { useState } from "react";
import "./board.css";
import Square from "./Square";

const Board = ({squareData, clicked}) => {
 
  return (
    <div className="container">
      {squareData.map((key, i) =>
      <div className="square">
      {
         key.map((item, id) => 
         <div><Square value={item} key={id} data={squareData[i][id]} clicked={() => clicked(i, id)} /></div>
         )  
      }
      </div>
      )}
    </div>
  );
};

export default Board;

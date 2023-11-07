import React from 'react'

const Square = ({data, clicked}) => {

    const square = {
        height:"10rem",
        width:"10rem",
        backgroundColor:"cornsilk",
        margin: "20px",
        cursor:"pointer",
        fontSize:"8rem",
        color:"black",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }

  return (
    <div style ={square} onClick={clicked}>
        {data}
    </div>
  )
}

export default Square

import React, { Component, useState } from "react";
import menu from "../assets/image/menu.svg";
import "../assets/style/header.css";
import NavBarRouter from "../pages/Navigation";

//this function for toggle button in navBar but problem is open completely in to the header what i shod do?
export default function Toggle() {
    const [showResults, setShowResults] = useState(false);
    const onClick = () => {
        return(
        //toggle happening
        setShowResults(!showResults)
        );
    }
    // const [error, setError]= useState([]); 
    return (
        <>
            {/* {error&&<div>{error}</div>} */}
            <button type="button" onClick={onClick}>
              toggle
            </button>
            {/* Show:Hide */}
            { showResults === true ? 
            <NavBarRouter /> : ""}
         
        </>
    );
}
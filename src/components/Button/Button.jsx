
import React from "react";
import "./Button.css"
const Button = (props) => {
    return (
        <>
        <div className="buttonDiv">
            <button className="button" onClick={props.onClick}>{props.name}</button>
        </div>
        </>
    )
}

export default Button

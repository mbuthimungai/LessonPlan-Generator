import React, { useRef, useEffect } from "react";
import "./Input.css"

const Input = (props) => {
    const labelRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        if (labelRef.current && inputRef.current) {
            const labelWidth = labelRef.current.offsetWidth;
            inputRef.current.style.paddingLeft = `${labelWidth + 20}px`; // add extra 10px space
        }
    }, [props.label]);

    return (
        <>
        <div className="inputDiv">
            {props.label && <label ref={labelRef} className="label">{props.label}</label>}
            <input ref={inputRef} className="input" type="text" placeholder={props.placeholder}/>
        </div>
        </>
    )
}

export default Input

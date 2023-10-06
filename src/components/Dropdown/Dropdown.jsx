import React, { useState } from "react";
import "./Dropdown.css"
const Dropdown = (props) => {
    const [selected, setSelected] = useState("");

    const handleChange = (e) => {
        const newValue = e.target.value;
        setSelected(newValue);
        props.onSelectChange && props.onSelectChange(newValue);        
    };

    return (
        <select 
            name={props.name} 
            id={props.id} 
            value={selected} 
            onChange={handleChange}
            className="dropdown"
        >
            {selected === "" &&
                <option className="dropdownHeader" value="" disabled={true} hidden={true}>
                    {props.placeholder}
                </option>
            }
            {props.items.map((option, key) => {
                return <option key={key} value={option.value}>{option.optname}</option>
            })}
        </select>
    );
};

export default Dropdown;

import React, { useState, useEffect, useRef } from "react";
import "./TextArea.css";

const TextArea = (props) => {
  const [value, setValue] = useState("");
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      // Set the height of the textarea to the scrollHeight to fit the content.
      textareaRef.current.style.height = 'auto'; // reset the height
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, []);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    props.onTextChange && props.onTextChange(newValue);
    // Adjust the height whenever the content changes.
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <>
      <div className="textareaDiv">
        <textarea
          ref={textareaRef}
          className="textarea"
          name=""
          id=""
          value={props.value || value}
          onChange={handleChange}
          placeholder={props.placeholder}
        />
      </div>
    </>
  );
};

export default TextArea;

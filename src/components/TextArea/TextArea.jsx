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
    setValue(e.target.value);
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
          value={value}
          onChange={handleChange}
          placeholder={props.placeholder}
        />
      </div>
    </>
  );
};

export default TextArea;

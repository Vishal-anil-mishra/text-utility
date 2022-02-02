import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Textform(props) {
  const [text, settext] = useState("");
  const handleUpclick = () => {
    console.log("upper case btn was clicked");
    let newtext = text.toUpperCase();
    settext(newtext);
    props.showalert("Converted to Uppercase", "success");
  };
  const handleloclick = () => {
    console.log("lower case btn was clicked");
    let newtext = text.toLowerCase();
    settext(newtext);
    props.showalert("Converted to Lowercase", "success");
  };
  const handleClearclick = () => {
    console.log("Clear text btn was clicked");
    settext("");
    props.showalert("Text has been cleared", "success");
  };
  const handleonchange = (e) => {
    settext(e.target.value);
  };
  const handleExtraspaces = () => {
    let newtxt = text.split(/[ ]+/);
    newtxt=newtxt.join(" ");
    settext(newtxt);
    props.showalert("Extraspaces has been removed", "success");
  };
  const handleCopy = () => {
    let text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert("Your text has been copied to clipboard", "success");
  };
  return (
    <>
      <div
        className={`container text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h1>{props.heading}</h1>
        <div className="container mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleonchange}
            style={props.mystyle}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpclick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleloclick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearclick}>
          Clear the text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraspaces}>
          Remove extraspaces
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy your text
        </button>
      </div>
      <div
        className={`container my-3 text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h2>your text summary</h2>
        <p>
          your text has {text.split(" ").length} words and {text.length}{" "}
          characters
        </p>
      </div>
    </>
  );
}

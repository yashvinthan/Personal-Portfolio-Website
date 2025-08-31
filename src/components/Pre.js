import React from "react";
import "../App.css"; // corrected path
import preloaderSvg from "../Assets/pre.svg"; // corrected path

function Pre(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
      {props.load && (
        <img src={preloaderSvg} alt="Loading..." className="preloader-icon" />
      )}
    </div>
  );
}

export default Pre;

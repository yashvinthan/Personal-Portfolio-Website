import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Computer Science Student",
          "Software Developer",
          "Full-Stack Developer",
          "AI & IoT Enthusiast",
          "Open Source Contributor",
          "Home Lab Builder",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

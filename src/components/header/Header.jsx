import React from "react";
import "./header.style.css";

export default function Header() {
  return (
    <header className="header">
      <img src="../../../public/img/troll-face.png" className="header--image" />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">React App</h4>
    </header>
  );
}

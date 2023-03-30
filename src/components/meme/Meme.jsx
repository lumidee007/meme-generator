import React from "react";
import "./meme.style.css";

export default function Meme() {
  return (
    <main className="main">
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          name="topText"
          className="form--input"
        />
        <input
          type="text"
          placeholder="Bottom text"
          name="bottomText"
          className="form--input"
        />
        <button className="form--button">Get a new meme image 🖼</button>
      </div>
      <div className="">
        <img src="../../../public/img/troll-face.png" className="meme--image" />
        <h2></h2>
        <h2></h2>
      </div>
    </main>
  );
}

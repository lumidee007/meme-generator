import { useState, useEffect } from "react";
import "./meme.style.css";

export default function Meme() {
  const [getMemes, setgetMemes] = useState([]);

  // fetching data from the api: https://api.imgflip.com/get_memes
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((memeImages) => setgetMemes(memeImages.data.memes));
  }, []);

  // console.log(getMemes);

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
      <div className="meme">
        <img src="../../../public/img/troll-face.png" className="meme--image" />
        <h2></h2>
        <h2></h2>
      </div>
    </main>
  );
}

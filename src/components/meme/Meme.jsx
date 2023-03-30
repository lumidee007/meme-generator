import React, { useState, useEffect } from "react";
import "./meme.style.css";

export default function Meme() {
  const [getMemes, setgetMemes] = useState([]);
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  // fetching data from the api: https://api.imgflip.com/get_memes
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((memeImages) => setgetMemes(memeImages.data.memes));
  }, []);

  // console.log(getMemes);

  const handleDisplay = () => {
    const randomNumber = Math.floor(Math.random() * getMemes.length);
    const url = getMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  };

  console.log(meme);

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
        <button className="form--button" onClick={handleDisplay}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2></h2>
        <h2></h2>
      </div>
    </main>
  );
}

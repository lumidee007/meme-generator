import React, { useState, useEffect } from "react";
import "./meme.style.css";

export default function Meme() {
  const [getMemes, setgetMemes] = useState([]);
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  // destructing meme object
  const { topText, bottomText, randomImage } = meme;

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

  // form handler
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  // console.log(meme);

  return (
    <main className="main">
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          name="topText"
          className="form--input"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom text"
          name="bottomText"
          className="form--input"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="form--button" onClick={handleDisplay}>
          Generate a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={randomImage} className="meme--image" />
        <h2 className="meme--text top">{topText}</h2>
        <h2 className="meme--text bottom">{bottomText}</h2>
      </div>
    </main>
  );
}

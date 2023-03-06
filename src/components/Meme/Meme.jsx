import { React, useState, useEffect } from 'react';
import './Meme.css';

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((response) => response.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  const getMemeImage = (event) => {
    event.preventDefault();
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    setMeme((prev) => ({
      ...prev,
      randomImage: allMemes[randomNumber].url,
    }));
  };

  const handleChange = (event) => {
    let { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  return (
    <div className="Meme">
      <form action="" className="form">
        <div className="text-input">
          <input
            type="text"
            name="topText"
            id="topText"
            placeholder="First line"
            value={meme.topText}
            onChange={handleChange}
          />
          <input
            type="text"
            name="bottomText"
            id="bottomText"
            placeholder="Second line"
            value={meme.bottomText}
            onChange={handleChange}
          />
        </div>
        <button onClick={getMemeImage}>Get a new meme image 🖼️</button>
        <div className="meme-container">
          <img src={meme.randomImage} alt="A funny meme" className="image" />
          <h2 className="top text">{meme.topText}</h2>
          <h2 className="bottom text">{meme.bottomText}</h2>
        </div>
      </form>
    </div>
  );
}

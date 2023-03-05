import React from 'react';
import './Meme.css';
import memeData from './memeData';

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState('');

  const getMemeImage = (event) => {
    event.preventDefault();
    const memesArray = memeData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  };

  return (
    <div className="Meme">
      <form action="" method="get" className="form">
        <div className="text-input">
          <input
            type="text"
            name="firstline"
            id="firstline"
            placeholder="First line"
          />
          <input
            type="text"
            name="secondline"
            id="secondline"
            placeholder="Second line"
          />
        </div>
        <button type="submit" onClick={getMemeImage}>
          Get a new meme image 🖼️
        </button>
        <img src={memeImage} alt="A funny meme" className="image" />
      </form>
    </div>
  );
}

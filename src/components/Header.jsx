import './Header.css';
import trollFace from './img/troll-face.png';

export default function Header() {
  return (
    <header className="Header">
      <div className="title">
        <img
          src={trollFace}
          alt="A picture of a gentleman troller"
          className="logo"
        />
        <h1>Meme Generator</h1>
      </div>
      <h3 className="desc">React Course Project 3</h3>
    </header>
  );
}

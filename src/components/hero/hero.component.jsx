import ReactPlayer from "react-player";

import "./hero.style.css";
const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-left">
          <div className="hero-text">
            <h1>
              Cokkoo -<br /> Give<span className="swigle">Wings</span>
              <br /> To Your Brand
            </h1>
          </div>
          <div className="hero-btn">
            <button className="btn-style">Contact Now</button>
          </div>
        </div>
        <div className="hero-right">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            muted
            className="player"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;

import Social from "./Social";
import heroImage from "../images/pp__hero.png";

const Hero = () => {
  return (
    <div className="hero__container">
      <div className="hero__title">
        <h1>Halim Sahin</h1>
        <p>
          Web Developer <span>React</span> formé par <span>OpenClassRoom</span>
        </p>
        <Social />
      </div>
      <div className="hero__img">
        <img src={heroImage} alt="halim sahin" />
      </div>
    </div>
  );
};

export default Hero;

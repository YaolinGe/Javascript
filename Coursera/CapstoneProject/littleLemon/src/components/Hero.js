import "./../styles/Hero.css";
import image from "./../images/icons_assets/restauranfood.jpg";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-description">
        <h1 className="hero-title">Little Lemon</h1>
        <h3 className="hero-subtitle">Chicago</h3>
        <p className="hero-text">
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <a href="/booking">
          <Button>Reserve a Table</Button>
        </a>
      </div>
      <div className="hero-image-frame">
        <img
          src={image}
          alt="restaurant food"
          className="hero-image"
          width="300px"
          height="350px"
        />
      </div>
    </div>
  );
}

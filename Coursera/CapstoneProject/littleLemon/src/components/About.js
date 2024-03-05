import "./../styles/About.css";
import image1 from "./../images/icons_assets/Mario and Adrian A.jpg";
import image2 from "./../images/icons_assets/Mario and Adrian b.jpg";

export default function About() {
  return (
    <article id="about">
      <section className="about-description">
        <h1 className="about-title">Little Lemon</h1>
        <h2 className="about-subtitle">Chicago</h2>
        <p className="about-text">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit.
        </p>
      </section>

      <section className="about-images">
        <img
          className="about-image img1"
          src={image1}
          alt="Mario and Adrian A"
        />
        <img
          className="about-image img2"
          src={image2}
          alt="Mario and Adrian B"
        />
      </section>
    </article>
  );
}

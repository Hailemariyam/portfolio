export default function HeroSection() {
    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hey, I`m Hailemariyam</p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">Full Stack</span>{" "}
              <br />
              Developer
            </h1>
            <p className="hero--section-description">
  As a skilled mobile app developer and MERN stack enthusiast, I thrive on crafting innovative solutions to real-world problems. 
  <br /> Whether it`s building seamless user experiences or developing robust backend systems, I`m passionate about pushing the boundaries of technology.
</p>

          </div>
          <button className="btn btn-primary">Get In Touch</button>
        </div>
        <div className="hero--section--img">
          <img src="./img/hero_img.png" alt="Hero Section" />
        </div>
      </section>
    );
  }
  
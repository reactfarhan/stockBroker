import "./Hero.css";
import bestIcon from '../assets/best.png'
import PhoneSlider from "./PhoneSlider";
function Hero() {
  return (
    <section className="hero-section container-fluid">
      <div className="container">
        <div className="row align-items-center hero-row">

          {/* LEFT CONTENT */}
          <div className="col-lg-6 hero-left">
            <h1 className="hero-title">
              Join <span>1.3 Crore+</span> Indians  
            </h1>
            <p className="hero-subtitle">
              who trust us for Trading & Investing
            </p>

            {/* PHONE INPUT */}
            <div className="hero-input-wrapper d-flex">
              <div className="hero-country">+91</div>
              <input
                type="text"
                placeholder="Enter your mobile number"
                className="hero-input"
              />
              <button className="hero-btn">Open Demat Account</button>
            </div>

            <p className="hero-terms">
              By continuing, I accept T&C and Privacy Policy
            </p>

            <div className="hero-stats d-flex align-items-start">
              <div className="me-5">
                <h4 className="hero-rating">4.5★</h4>
                <p className="hero-rating-text">Avg. app rating</p>
              </div>

              <div>
                <p className="hero-backed">Backed by the Best</p>
                <img
                  src={bestIcon}
                  className="hero-backed-img"
                  alt="Backed Logo"
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="col-lg-6 text-center hero-right">
            <PhoneSlider />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

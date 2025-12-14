import "./AboutUs.css";

export default function AboutUs() {
  return (
    <section className="sb-about-wrapper">
      <div className="sb-about-container">
        <p className="sb-about-top-text">About Us</p>

        <h2 className="sb-about-title">
          Bringing Your Vision to Life <br /> with Expertise and Dedication
        </h2>

        <div className="sb-about-image-box">
          <img src="/about_2.jpg" alt="About Stock Broker" className="sb-about-image" />
        </div>

        <div className="sb-about-stats">
          <div className="sb-stat-card">
            <h3>100+</h3>
            <p>Employees</p>
          </div>

          <div className="sb-stat-card">
            <h3>15+</h3>
            <p>Countries</p>
          </div>

          <div className="sb-stat-card">
            <h3>60+</h3>
            <p>Projects Done</p>
          </div>

          <div className="sb-stat-card">
            <h3>30+</h3>
            <p>Offices</p>
          </div>

          <div className="sb-stat-card">
            <h3>25+</h3>
            <p>Project Awards</p>
          </div>
        </div>

        <div className="sb-about-text-box">
          <p>
            We are a leading stock brokerage company focused on providing
            secure, transparent, and innovative financial solutions. Our
            team of experienced professionals works tirelessly to deliver
            exceptional value and guidance.
          </p>

          <button className="sb-about-btn">Know More</button>
        </div>
      </div>
    </section>
  );
}

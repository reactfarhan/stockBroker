import { useEffect, useRef, useState } from "react";
import "./Testimonials.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Rahul Mehta",
    role: "Equity Investor",
    company: "Self Employed",
    img: "/trader.png",
    text: "The platform is extremely smooth and reliable."
  },
  {
    name: "Ananya Sharma",
    role: "Portfolio Manager",
    company: "FinEdge Capital",
    img: "/trader2.png",
    text: "Their PMS offerings helped me diversify portfolios."
  },
  {
    name: "Vikram Singh",
    role: "Derivative Trader",
    company: "Trader",
    img: "/trader.png",
    text: "Fast execution and professional service."
  },
  {
    name: "Neha Kapoor",
    role: "Mutual Fund Investor",
    company: "Corporate Professional",
    img: "/trader2.png",
    text: "I started investing confidently using their tools."
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const trackRef = useRef(null);

  const slideWidth = 34.63;

  const startAutoSlide = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 4000);
  };

  const nextSlide = () => {
    setIndex((prev) => prev + 1);
    startAutoSlide(); // RESET timer
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    startAutoSlide(); // RESET timer
  };

  // Initial auto slide
  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(timerRef.current);
  }, []);

  // Infinite loop reset
  useEffect(() => {
    if (index === testimonials.length) {
      setTimeout(() => {
        trackRef.current.style.transition = "transform 0.0001s ease";
        setIndex(0);
      }, 600);
    }
    trackRef.current.style.transition = "transform 0.6s ease";
  }, [index]);

  return (
    <section className="testimonial-section">
      <div className="testimonial-inner">

        {/* LEFT */}
        <div className="testimonial-left">
          <h2>Testimonials</h2>
          <p>
            Hear from our investors and traders who trust us.
          </p>

         <div className="testimonial-nav">
  <button onClick={prevSlide}>
    <FaArrowLeft />
  </button>
  <button onClick={nextSlide}>
    <FaArrowRight />
  </button>
</div>
        </div>

        {/* RIGHT */}
        <div className="testimonial-right">
          <div ref={trackRef} className="testimonial-track" style={{
              transform: `translateX(-${index * slideWidth}%)`,
            }}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
               <div
                key={i}
                className={`testimonial-card ${
                  i % testimonials.length === index ? "active" : ""
                }`}
              >
                <img src={t.img} alt={t.name} />
                <h4>{t.name}</h4>
                <span className="role">{t.role}</span>
                <p className="text">{t.text}</p>
                <span className="company">{t.company}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

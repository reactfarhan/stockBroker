import { useState, useEffect } from "react";

export default function PhoneSlider() {
  const images = ["/mobile_image.png", "/mobile_image2.png", "/mobile_image.png"];
  const [index, setIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="phone-slider-container">
      {/* Slider Track */}
      <div
        className="phone-slider-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <img key={i} src={src} alt="" className="phone-slider-img" />
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="phone-slider-dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
}

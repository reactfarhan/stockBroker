import { useState, useEffect } from "react";

export default function PhoneSlider() {
  const images = [
    "/mobile_image.png",
    "/mobile_image2.png",
    "/mobile_image.png",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);

    
    }, 5000);
      return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="phone-slider-container">
      <div
        className="phone-slider-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <img key={i} src={src} className="phone-slider-img" alt="" />
        ))}
      </div>

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

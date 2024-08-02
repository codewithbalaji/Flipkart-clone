import { useState } from "react";
import img1 from "../../assets/img1.webp";
import img2 from "../../assets/img2.webp";
import img3 from "../../assets/img3.webp";
import img4 from "../../assets/img4.webp";
import img5 from "../../assets/img5.webp";
import img6 from "../../assets/img6.webp";

import "../Slider/slider.css";
import { useEffect } from "react";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [img1, img2, img3, img4, img5, img6];

  const plusSlides = (n) => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + n + slides.length) % slides.length
    );
  };

  const currentSlide = (n) => {
    setCurrentIndex(n);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      plusSlides(1);
    }, 4000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="slider">
      <div className="slideshow-container">
        {slides.map((slide, index) => (
          <div
            className={`mySlides fade ${
              index === currentIndex ? "active" : ""
            }`}
            style={{ display: index === currentIndex ? "block" : "none" }}
            key={index}
          >
            <img
              src={slide}
              style={{ width: "100%" }}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
        <div className="dot-div" style={{ textAlign: "center" }}>
          {slides.map((_, index) => (
            <span
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => currentSlide(index)}
              key={index}
            ></span>
          ))}
        </div>
        <a className="prev" onClick={() => plusSlides(-1)}>
          &#10094;
        </a>
        <a className="next" onClick={() => plusSlides(1)}>
          &#10095;
        </a>
      </div>
      <br />
    </section>
  );
};

export default Slider;

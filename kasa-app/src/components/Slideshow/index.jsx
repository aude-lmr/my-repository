import React, { useState } from "react";
import left from "../../assets/arrow-left.svg";
import right from "../../assets/arrow-right.svg";
import styled from "../Slideshow/slideshow.module.scss";

// Create the slideshow component
const Slideshow = ({ slides }) => {
  const [current, setCurrent] = useState(0); // Use useState to manage the current state of the slideshow
  const length = slides.length; // Calculate the length of the array of slides

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  return (
    <div className={styled.slideshow}>
      <img
        className={`${
          length === 1
            ? "none " + styled.none
            : "left arrow " + styled.arrow + " " + styled.left
        }`}
        onClick={prevSlide}
        src={left}
        alt="précédent"
      />

      {/* Loop over the slides and display each of them */}
      {slides.map((slide, index) => {
        return (
          <div
            key={index}
            className={
              index === current
                ? `slideshowActive ${styled.slideshowActive}`
                : `slideshowInactive ${styled.slideshowInactive}`
            }
          >
            {index === current && (
              <img
                className={styled.slideshowSlide}
                src={slide}
                alt="img-appartement"
              />
            )}
            {index === current && length > 1 && (
              <span className={styled.slideshowPagination}>
                {current + 1}/{length}
              </span>
            )}
          </div>
        );
      })}
      <img
        className={
          length === 1
            ? `none ${styled.none}`
            : `right arrow ${styled.arrow} ${styled.right}`
        }
        onClick={nextSlide}
        src={right}
        alt="suivant"
      />
    </div>
  );
};

export default Slideshow;

import React, { useState, useCallback } from "react";
import GatsbyImage from "gatsby-image";
import { useIntl } from "gatsby-plugin-intl";
import { oyw } from "../../data/oyw";

// Styles
import "./styles/Testimonials.css";

const Slide = ({ images, testimonial, active }) => {
  const intl = useIntl();
  return (
    <div style={{ display: `${active ? "block" : "none"}` }} className={`fade`}>
      <div className="rectangle-testimonial">
        <GatsbyImage
          className="absolute md:flex hidden top-4 md:top-10 left-0 w-4 md:w-10 h-4 md:h-10 pt-9 ml-9"
          imgStyle={{ objectFit: "fill" }}
          fluid={images["semicolon"].childImageSharp.fluid}
        />{" "}
        {active}
        <h5 className="absolute text-sm top-0 text-gray-200 testimonial-margin">
          {intl.formatMessage({
            id: `OYW.testimonials.${testimonial.id}`,
          })}
        </h5>
        <div className="oyw-testimonial-name-small">
          <div className="flex flex-col md:flex-row mt-10 md:mt-0">
            <div className="column md:flex hidden">
              <GatsbyImage
                className="w-24 md:w-32 mx-auto my-2 rounded-full team-icons"
                imgStyle={{ objectFit: "fill" }}
                fluid={images[testimonial.id].childImageSharp.fluid}
                alt="Annelisse Torrez Daza"
              />
            </div>
            <div className="column">
              <h5 className="mt-48 md:mt-4 text-sm md:rext-base font-semibold text-gray-200 text-center">
                {testimonial.defaultName}
              </h5>
              <h6 className="text-sm text-center text-gray-200">
                {testimonial.country}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ({ images }) => {
  const intl = useIntl();
  const [currentSlide, setCurrentSlide] = useState(1);

  const updateCurrentSlide = useCallback(
    (number) => {
      let currectUpdated = currentSlide + number;
      if (currectUpdated <= 0) {
        currectUpdated = oyw.testimonials.length;
      }

      if (currectUpdated >= oyw.testimonials.length + 1) {
        currectUpdated = 1;
      }

      setCurrentSlide(currectUpdated);
    },
    [currentSlide, setCurrentSlide]
  );
  return (
    <section className="my-10 wrapper">
      <h2 className="mb-4 text-4xl font-bold text-gray-200 text-center">
        {intl.formatMessage({ id: `OYW.testimonials.title` })}
      </h2>
      <div className="mb-4 text-gray-200 text-center mx-10">
        <p>{intl.formatMessage({ id: `OYW.testimonials.intro` })} </p>
      </div>
      <div className="slideshow-container">
        {oyw.testimonials.map((testimonial, idx) => (
          <Slide
            key={`testimonial-${idx}`}
            images={images}
            testimonial={testimonial}
            active={currentSlide === idx + 1}
          />
        ))}
        <a className="prev" onClick={() => updateCurrentSlide(-1)}>
          &#10094;
        </a>
        <a className="next" onClick={() => updateCurrentSlide(1)}>
          &#10095;
        </a>
      </div>
      <div style={{ textAlign: "center" }}>
        {oyw.testimonials.map((_, idx) => (
          <span
            className={`${currentSlide === idx + 1 ? " active " : ""} dot`}
            onClick={() => setCurrentSlide(idx + 1)}
          ></span>
        ))}
      </div>
    </section>
  );
};

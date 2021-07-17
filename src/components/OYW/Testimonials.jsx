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
      <div className="flex flex-col w-full h-auto rounded-2xl bg-blue-100 py-10  px-12 text-center sm:px-20">
        <div className="w-full flex justify-center items-center">
          <GatsbyImage
            className="hidden sm:block mr-10 w-28 dis"
            imgStyle={{ objectFit: "fill" }}
            fluid={images["semicolon"].childImageSharp.fluid}
          />
          <p className="text-sm">
            {intl.formatMessage({
              id: `OYW.testimonials.${testimonial.id}`,
            })}
          </p>
        </div>
        <div className="w-auto flex justify-center items-center mt-6">
          <GatsbyImage
            className="w-24 md:w-32 rounded-full"
            imgStyle={{ objectFit: "fill" }}
            fluid={images[testimonial.id].childImageSharp.fluid}
            alt="Annelisse Torrez Daza"
          />
          <div className="flex flex-col ml-6">
            <p className="font-bold text-base">{testimonial.defaultName}</p>
            <p className="text-left text-sm">{testimonial.country}</p>
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
    <section style={{ maxWidth: "calc(100vw - 4rem)" }} className="w-full">
      <h2 className="mb-6 mt-2 text-3xl font-bold text-center">
        {intl.formatMessage({ id: `OYW.testimonials.title` })}
      </h2>
      <div className="mb-8 text-center mx-6">
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
        <a className="prev text-blue" onClick={() => updateCurrentSlide(-1)}>
          &#10094;
        </a>
        <a className="next text-blue" onClick={() => updateCurrentSlide(1)}>
          &#10095;
        </a>
      </div>
      <div style={{ marginTop: "24px", textAlign: "center" }}>
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

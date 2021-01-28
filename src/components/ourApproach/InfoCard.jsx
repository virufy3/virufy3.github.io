import React, { useState } from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import Modal from "../Modal";

function InfoCard({ sourceNum, title, description, source, icon }) {
  const [open, setOpen] = useState(false);
  const triggerRef = React.useRef(null);

  function handleClick() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <button
        className="bg-white p-3 flex flex-col rounded text-black text-left cursor-pointer transition-shadow hover:shadow-xl"
        onClick={handleClick}
        ref={triggerRef}
      >
        <h5 className="font-heading">{`${title} [${sourceNum}]`}</h5>
        <div className="flex-grow flex flex-col justify-center w-full">
          <div className="py-4 xl:py-8">
            <Img
              className="mx-auto h-32 w-auto"
              fluid={icon}
              imgStyle={{ objectFit: "contain" }}
              aria-hidden
            />
          </div>
        </div>
        <sub className="font-heading leading-normal italic">{source}</sub>
      </button>
      <Modal
        show={open}
        triggerRef={triggerRef}
        scale={1.5}
        onClose={handleClose}
      >
        <h1 className="font-bold pb-4">{title}</h1>
        <p>{description}</p>
        <sub className="font-heading leading-normal italic">{source}</sub>
        <Img
          className="h-32 w-auto"
          fluid={icon}
          imgStyle={{ objectFit: "contain" }}
          aria-hidden
        />
      </Modal>
    </>
  );
}

InfoCard.propTypes = {
  sourceNum: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired,
};

export default InfoCard;

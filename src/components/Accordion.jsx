import React, { useState } from "react";
import cross from "../images/icons/cross.png";
import plus from "../images/icons/plus.png";

export default ({ items }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(-1);

  const handleClick = (index) => {
    setActiveItemIndex(index === activeItemIndex ? -1 : index);
  };

  return (
    <>
      <hr className="w-full mb-2" />
      {items.map((item, index) => (
        <>
          <p
            className="flex font-bold justify-between items-center w-full"
            onClick={() => handleClick(index)}
          >
            {item.title}
            {/*prettier-ignore*/}
            <img
              className={`inline-block ${activeItemIndex === index ? "rotate-45 transform" : ""}`}
              // src={activeItemIndex === index ? cross : plus}
              src={plus}
            />
          </p>
          {activeItemIndex === index && (
            <div className={"mt-2"}>{item.contents}</div>
          )}
          <hr className="w-full mb-2" />
        </>
      ))}
    </>
  );
};

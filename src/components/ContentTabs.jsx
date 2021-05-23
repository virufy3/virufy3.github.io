import React, { useState } from "react";

export default ({ items }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const handleClick = (index) => {
    setActiveItemIndex(index === activeItemIndex ? 0 : index);
  };

  return (
    <div className="flex flex-row grid grid-cols-4 gap-4 bg-white border-2">
      <div class="col-span-0 bg-gray_light border-t border-l border-b">
        {items.map((item, index) => (
          <div
            className={`border-t border-b ${
              activeItemIndex === index ? "bg-white" : "border-r"
            }`}
          >
            <span
              className={`flex font-bold justify-between items-center w-full px-4 py-2`}
              onClick={() => handleClick(index)}
            >
              {item.title}
            </span>
          </div>
        ))}
      </div>
      <div class="col-span-3 overflow-y-scroll h-44 bg-white">
        <hr className="w-full mb-0" />
        {items
          .filter((_, index) => activeItemIndex === index)
          .map((item) => (
            <div className={"mt-2"}>{item.contents}</div>
          ))}
      </div>
    </div>
  );
};

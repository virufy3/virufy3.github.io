import { useState } from "react";

export default function usePx(initialValue) {
  const [pixelValue, setPixelValue] = useState(initialValue);

  function setNumericValue(value) {
    setPixelValue(value + "px");
  }

  return [pixelValue, setNumericValue];
}

import React, { useEffect } from "react";

const paperURL = "https://forms.gle/FaW1LqGBvjEYn6ti6";

export default function Paper() {
  useEffect(() => {
    window.location.replace(paperURL);
  });

  return <p>Redirecting...</p>;
}

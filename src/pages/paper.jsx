import React, { useEffect } from "react";

const paperURL =
  "https://ui.adsabs.harvard.edu/abs/2021arXiv210301806F/abstract";

export default function Paper() {
  useEffect(() => {
    window.location.replace(paperURL);
  });

  return <p>Redirecting...</p>;
}

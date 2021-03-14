import React, { useEffect } from "react";

const paperURL = "../our-approach#open-data";

export default function Paper() {
  useEffect(() => {
    window.location.replace(paperURL);
  });

  return <p>Redirecting...</p>;
}

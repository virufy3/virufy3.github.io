import React, { useEffect } from "react";

const paperURL = "/team#our-team";

export default function Paper() {
  useEffect(() => {
    window.location.replace(paperURL);
  });

  return <p>Redirecting...</p>;
}

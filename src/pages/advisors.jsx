import React, { useEffect } from "react";

const paperURL = "/team#advisors";

export default function Advisors() {
  useEffect(() => {
    window.location.replace(paperURL);
  });

  return <p>Redirecting...</p>;
}

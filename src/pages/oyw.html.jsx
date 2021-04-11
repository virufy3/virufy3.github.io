import React, { useEffect } from "react";

const paperURL = "/oyw";

export default function Paper() {
  useEffect(() => {
    window.location.replace(paperURL);
  });

  return <p>Redirecting...</p>;
}

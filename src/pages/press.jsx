import React, { useEffect } from "react";

const paperURL = "/news";

export default function Paper() {
  useEffect(() => {
    window.location.replace(paperURL);
  });

  return <p>Redirecting...</p>;
}

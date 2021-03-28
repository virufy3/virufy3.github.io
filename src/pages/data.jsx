import React, { useEffect } from "react";

const paperURL = "https://github.com/virufy/covid";

export default function Paper() {
  useEffect(() => {
    window.location.replace(paperURL);
  });

  return <p>Redirecting...</p>;
}

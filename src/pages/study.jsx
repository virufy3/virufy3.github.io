import React, { useEffect } from "react";

const paperURL = "https://virufy.org/study/welcome/";

export default function Paper() {
  useEffect(() => {
    window.location.replace(paperURL);
  });

  return <p>Redirecting...</p>;
}

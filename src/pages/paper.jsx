import React, { useEffect } from "react";

const paperURL = "https://arxiv.org/abs/2011.13320";

export default function Paper() {
  useEffect(() => {
    window.location.replace(paperURL);
  });

  return <p>Redirecting...</p>;
}

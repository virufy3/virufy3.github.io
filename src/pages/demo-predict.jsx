import React, { useEffect } from "react";

const paperURL = "/demo-predict/welcome";

export default function Paper() {
  useEffect(() => {
    window.location.replace(paperURL);
  });

  return <p>Redirecting...</p>;
}

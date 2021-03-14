import React, { useEffect } from "react";

const paperURL = "/study";

export default function Paper() {
  useEffect(() => {
    window.location.replace(paperURL);
  });

  return <p>Redirecting...</p>;
}

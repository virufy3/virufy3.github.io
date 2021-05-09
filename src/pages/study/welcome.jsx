import React, { useEffect } from "react";
import { useIntl } from "gatsby-plugin-intl";
const paperURL = "https://virufy.org/study";

export default function Paper() {
  const intl = useIntl();
  useEffect(() => {
    window.location.replace(`${paperURL}`);
  });

  return <p>Redirecting...</p>;
}

import React, { useEffect } from "react";
import { useIntl } from "gatsby-plugin-intl";
const paperURL = "/ourOrg#our-team";

export default function Paper() {
  const intl = useIntl();
  useEffect(() => {
    window.location.replace(`/${intl.locale}${paperURL}`);
  });

  return <p>Redirecting...</p>;
}

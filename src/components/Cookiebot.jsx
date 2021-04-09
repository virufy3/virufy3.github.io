import React from "react";
import { Helmet } from "react-helmet";

export default () => {
  return (
    <Helmet>
      <script
        id="Cookiebot"
        src="https://consent.cookiebot.com/uc.js"
        data-cbid="fb5fec28-28e3-45e9-baa6-51f9f62f936b"
        data-blockingmode="auto"
        type="text/javascript"
      ></script>
      <script
        id="CookieDeclaration"
        src="https://consent.cookiebot.com/fb5fec28-28e3-45e9-baa6-51f9f62f936b/cd.js"
        type="text/javascript"
        async
      ></script>
    </Helmet>
  );
};

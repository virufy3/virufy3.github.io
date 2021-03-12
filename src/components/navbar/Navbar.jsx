import React from "react";
import virufyLogoLight from "../../images/logos/virufy-logo.png";
import virufyLogoDark from "../../images/logos/virufy_logo_whitetext.png";
import { useLocation } from "@reach/router";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

export default () => {
  const location = useLocation();

  //prettier-ignore
  const [
    bgColor, 
    textColor, 
    virufyLogo
  ] = location.pathname.includes("/team")
    ? ["bg-black", "text-white", virufyLogoDark]
    : ["bg-white", "text-black", virufyLogoLight];

  return (
    <nav className={`${bgColor}`}>
      <MobileNav
        textColor={textColor}
        bgColor={bgColor}
        virufyLogo={virufyLogo}
      />
      <DesktopNav
        textColor={textColor}
        bgColor={bgColor}
        virufyLogo={virufyLogo}
      />
    </nav>
  );
};

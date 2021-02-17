import React from "react";

// svg for opening nav
const HamburgerOpen = ({ textColor }) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className={`w-6 ${textColor}`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h16M4 18h16"
    ></path>
  </svg>
);

// svg for closing nav
const HamburgerClose = ({ textColor }) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className={`w-6 ${textColor}`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12"
    ></path>
  </svg>
);

export default ({ mobileNavOpen, setMobileNavOpen, textColor }) => {
  const toggleNav = () => setMobileNavOpen(!mobileNavOpen);

  return (
    <button onClick={toggleNav}>
      {mobileNavOpen ? (
        <HamburgerClose textColor={textColor} />
      ) : (
        <HamburgerOpen textColor={textColor} />
      )}
    </button>
  );
};

import React, { useState } from "react";
import { useIntl } from "react-intl";
import { Link, changeLocale } from "gatsby";
import virufyLogo from "../images/logos/virufy-logo.svg";


// svg for opening nav
const HamburgerOpen = () => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 menu">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
);

// svg for closing nav
const HamburgerClose = () => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 x">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
);

const navLinks = [
    {id: "nav.data", defMsg: "Data", path: "data"},
    {id: "nav.research", defMsg: "Research", path: "research"},
    {id: "nav.team", defMsg: "Team", path: "team"},
    {id: "nav.join", defMsg: "Join", path: "join"},
    {id: "nav.press", defMsg: "Press", path: "press"},
    {id: "nav.faq", defMsg: "FAQ", path: "faq"},
];

const MobileNav = ({ intl }) => {
    return (
        <div className="flex flex-wrap px-4 py-4 border-t border-gray-200">
            {navLinks.map(el => (
                <Link className="w-1/2" to={el.path}>
                    {intl.formatMessage({id: el.id, defaultMessage: el.defMsg})}
                </Link>
            ))}
        </div>
    );
}

const MobileNavToggle = ({ mobileNavOpen, setMobileNavOpen }) => {
    const toggleNav = () => setMobileNavOpen(!mobileNavOpen);

    return (
        <button className="inline-block cursor-pointer lg:hidden" onClick={toggleNav}>
            {mobileNavOpen ? <HamburgerClose /> : <HamburgerOpen />}
        </button>
    );
}

export default () => {
    const intl = useIntl();
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    return (
        <nav>
            <div className="flex items-center justify-between wrapper md:py-4">
                <Link to="./index.html">
                    <img
                        className="logo"
                        src={virufyLogo}
                        alt={intl.formatMessage({ id: "nav.logoAlt", defaultMessage: "home" })}
                    />
                </Link>
                <MobileNavToggle
                    mobileNavOpen={mobileNavOpen}
                    setMobileNavOpen={setMobileNavOpen}
                />
            </div>
            <div className="lg:hidden">
                {mobileNavOpen && <MobileNav intl={intl} />}
            </div>
        </nav>
    );
}
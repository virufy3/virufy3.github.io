import React, { useState } from "react";
import { useIntl } from "react-intl";
import { Link, changeLocale } from "gatsby";
import virufyLogo from "../images/logos/virufy-logo.svg";

// svg for opening nav
const HamburgerOpen = () => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 menu">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
);

// svg for closing nav
const HamburgerClose = () => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 x">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
);

const MobileNav = ({intl}) => {
    return (
        <section class="px-4 py-4 border-t border-gray-200">
            <div className="flex mt-4">
                <Link className="w-1/2" to="data">{intl.formatMessage({id: "nav.data", defaultMessage: "data"})}</Link>
                <Link className="w-1/2" to="research">{intl.formatMessage({id: "nav.research", defaultMessage: "research"})}</Link>
            </div>

        </section>
    );
}

const MobileNavToggle = ({mobileNavOpen, setMobileNavOpen}) => {
    const toggleNav = () => setMobileNavOpen(!mobileNavOpen);

    return (
        <button className="inline-block cursor-pointer lg:hidden" onClick={toggleNav}>
            {mobileNavOpen ? <HamburgerClose/> : <HamburgerOpen/>}
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
                {mobileNavOpen && <MobileNav intl={intl}/>}
            </div>
        </nav>
    );
}
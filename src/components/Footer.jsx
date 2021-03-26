import React, { useState } from "react";
import { useIntl } from "gatsby-plugin-intl";
import { Link } from "gatsby";
import githubLogo from "../images/logos/github.png";
import instagramLogo from "../images/logos/instagram.png";
import twitterLogo from "../images/logos/twitter.png";
import facebookLogo from "../images/logos/facebook.png";
import linkedinLogo from "../images/logos/linkedin.png";
import youtubeLogo from "../images/logos/youtube.png";

const socialLinks = [
  {
    name: "GitHub",
    logo: githubLogo,
    address: "https://github.com/virufy",
  },

  {
    name: "Instagram",
    logo: instagramLogo,
    address: "https://www.instagram.com/virufyorg/",
  },
  {
    name: "Twitter",
    logo: twitterLogo,
    address: "https://twitter.com/VirufyOrg",
  },
  {
    name: "Facebook",
    logo: facebookLogo,
    address: "https://www.facebook.com/Virufy/",
  },
  {
    name: "LinkedIn",
    logo: linkedinLogo,
    address: "https://www.linkedin.com/company/virufy/",
  },
  {
    name: "Youtube",
    logo: youtubeLogo,
    address: "https://www.youtube.com/channel/UC6m20FEpd6J-HAoyitJKfkg",
  },
];

const footerLinks = [
  {
    intlId: "footer.cookiePolicy",
    address: "/cookie_policy",
  },
  {
    intlId: "footer.cookieSettings",
    address: "#",
  },
  {
    intlId: "footer.privacyPolicy",
    address: "/privacy_policy",
  },
  {
    intlId: "footer.dontSellPersonalInfo",
    address: "/ccpa",
  },
];

export default () => {
  const intl = useIntl();

  const informationEmail = intl.formatMessage({
    id: "footer.email",
    defaultMessage: "info@virufy.org",
  });

  return (
    <div class="md:grid md:grid-cols-2 md:gap-4 text-white px-6 md:mx-8">
      <div>
        <a
          className="md:flex flex-initial md:flex-row block underline mb-6 text-white"
          href={`mailto:${informationEmail}`}
        >
          {informationEmail}
        </a>
        <p className="block no-underline mb-6 text-white">
          {intl.formatMessage({ id: "footer.address", defaultMessage: "" })}
        </p>
        <div className="md:flex flex-initial md:flex-row">
          <div className="flex flex-grow">
            {socialLinks.map((socialLinkInformation) => (
              <a
                href={socialLinkInformation.address}
                key={socialLinkInformation.name}
                className="mr-6"
              >
                <img
                  src={socialLinkInformation.logo}
                  alt={socialLinkInformation.name}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="pt-6 md:pt-0 md:ml-6">
        {footerLinks.map((footerLink, index) => (
          <>
            <a
              className="underline text-sm text-white"
              href={footerLink.address}
              key={footerLink.intlId}
            >
              {intl.formatMessage({ id: footerLink.intlId })}
            </a>
            {index + 1 !== footerLinks.length && (
              <>
                {
                  "  |  " // Only show vertical line after when not the last element
                }
              </>
            )}
          </>
        ))}
        <p className="text-sm">
          {intl.formatMessage({
            id: "footer.copyrightInformation",
            defaultMessage: "©2021 Virufy  |  All rights reserved",
          })}
        </p>
        <p className="mt-4 text-sm">
          {intl.formatMessage({
            id: "footer.nonprofit",
          })}
        </p>
      </div>
    </div>
  );
};

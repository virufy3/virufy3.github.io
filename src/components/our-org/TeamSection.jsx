import React, { useState } from "react";
import GatsbyImage from "gatsby-image";
import { useIntl } from "gatsby-plugin-intl";
import { leadership, advisors } from "../../data/team-members";

const TeamMember = (props) => {
  const intl = useIntl();

  const {
    role,
    image,
    person: { id, defaultName, mediaLink },
  } = props;

  return (
    <div id="our-team" className="flex flex-col text-left	 mx-auto mb-10 w-full">
      <a className="w-full" target="_blank" rel="noreferrer" href={mediaLink}>
        <GatsbyImage
          className="mx-auto my-2 rounded-md overflow-hidden team-icons"
          imgStyle={{ objectFit: "fill" }}
          fluid={image}
        />

        <h5 className="mt-4 text-xl font-semibold text-black no-underline	">
          {intl.formatMessage({
            id: `team.teamSection.${role}.${id}.name`,
            defaultMessage: defaultName,
          })}
        </h5>
      </a>
      <h6 className="text-lg font-light ">
        {intl.formatMessage({
          id: `team.teamSection.${role}.${id}.title`,
        })}
      </h6>
      <div className="my-2"></div>
      {intl
        .formatMessage({
          id: `team.teamSection.${role}.${id}.description`,
        })
        .split("\n")
        .map((str, i) => (
          <p key={i} className="w-5/6 font-semibold ">
            {str}
          </p>
        ))}
    </div>
  );
};

export default ({ images }) => {
  const intl = useIntl();
  const [selectedTab, setSelectedTab] = useState("advisors");
  const tabs = {
    advisors: "advisors",
    teamLeads: "team leads",
    oyw: "one young world",
  };
  const selectedTabClasses =
    "font-bold bg-white border-b-2 border-solid border-green focus:outline-none active:outline-none";
  const unselectedTabClasses = "bg-white text-gray-500 font-semibold";

  return (
    <section className="p-8">
      <div className="pb-12">
        <h2 className="text-3xl text-center font-bold mb-2 text-black">
          {intl.formatMessage({ id: "team.teamSection.header" })}
        </h2>
      </div>
      <button
        onClick={() => setSelectedTab(tabs.advisors)}
        className={`${
          selectedTab === tabs.advisors
            ? selectedTabClasses
            : unselectedTabClasses
        } mr-4`}
      >
        {intl.formatMessage({
          id: "team.teamSection.advisorText",
        })}
      </button>
      <button
        onClick={() => setSelectedTab(tabs.teamLeads)}
        className={`${
          selectedTab === tabs.teamLeads
            ? selectedTabClasses
            : unselectedTabClasses
        } mr-4`}
      >
        {intl.formatMessage({
          id: "team.teamSection.teamLeadText",
        })}
      </button>
      <a href="/oyw" target="_blank">
        <button className="bg-white text-gray-500 font-semibold">
          {intl.formatMessage({
            id: "team.teamSection.oyw",
          })}
        </button>
      </a>

      <div className="mt-4 sm:grid sm:grid-cols-2 sm:gap-x-4 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-6 xl:grid-cols-4">
        {selectedTab === tabs.teamLeads &&
          leadership.map((leader, idx) => (
            <TeamMember
              key={`leaders${idx}`}
              role="leadership"
              image={images[leader.imageName].childImageSharp.fluid}
              person={leader}
            />
          ))}
        {selectedTab === tabs.advisors &&
          advisors.map((advisor, idx) => (
            <TeamMember
              key={`advisors${idx}`}
              role="advisors"
              image={images[advisor.imageName].childImageSharp.fluid}
              person={advisor}
            />
          ))}
      </div>
    </section>
  );
};

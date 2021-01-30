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
    <div className="flex flex-col items-center mx-auto mb-10 w-full">
      <a className="w-full" target="_blank" rel="noreferrer" href={mediaLink}>
        <GatsbyImage
          className="mx-auto my-2  rounded-md overflow-hidden team-icons"
          imgStyle={{ objectFit: "fill" }}
          fluid={image}
        />
      </a>
      <h5 className="mt-4 text-xl font-semibold text-gray-200">
        {intl.formatMessage({
          id: `team.teamSection.${role}.${id}.name`,
          defaultMessage: defaultName,
        })}
      </h5>
      <h6 className="text-lg text-center">
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
          <p key={i} className="w-5/6 text-center">
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
    teamLeads: "team leads",
    advisors: "advisors",
  };
  const selectedTabClasses =
    "font-bold bg-white border-b-2 border-solid border-green focus:outline-none active:outline-none";
  const unselectedTabClasses = "bg-white";

  return (
    <section className="p-8">
      <div className="pb-12">
        <h2 className="text-3xl text-center font-bold mb-2 text-black">
          {intl.formatMessage({ id: "team.teamSection.header" })}
        </h2>
        <p className="text-center">
          {intl.formatMessage({ id: "team.teamSection.pg1" })}
        </p>
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
        className={
          selectedTab === tabs.teamLeads
            ? selectedTabClasses
            : unselectedTabClasses
        }
      >
        {intl.formatMessage({
          id: "team.teamSection.teamLeadText",
        })}
      </button>
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

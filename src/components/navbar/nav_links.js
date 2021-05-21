const navLinks = [
  {
    id: "1",
    intlId: "nav.ourApproach",
    defMsg: "Our Approach",
    path: "/our-approach",
    dropDownLinks: [
      { intlId: "nav.techBehind", sectionId: "tech-behind" },
      { intlId: "nav.faqs", sectionId: "faq" },
    ],
  },
  {
    id: "2",
    intlId: "nav.ourOrg",
    defMsg: "Our Organization",
    path: "/team",
    dropDownLinks: [
      { intlId: "nav.ourData", sectionId: "", path: "/dashboard" },
      { intlId: "nav.ourVision", sectionId: "our-vision" },
      { intlId: "nav.ourTeam", sectionId: "our-team" },
      { intlId: "nav.ourSupporters", sectionId: "our-supporters" },
    ],
  },
  {
    id: "3",
    intlId: "nav.inTheNews",
    defMsg: "In the News",
    path: "/news",
    classes: "text-white",
  },
  {
    id: "4",
    intlId: "nav.faqs",
    defMsg: "FAQs",
    path: "/our-approach#faq",
  },
];

const buttonInvolved = [
  {
    intlId: "nav.getInvolved",
    defMsg: "GET INVOLVED",
    path: "/get-involved",
    btnStyle: true,
    classes: "text-white bg-primary py-2 px-6",
  },
];
export { navLinks, buttonInvolved };

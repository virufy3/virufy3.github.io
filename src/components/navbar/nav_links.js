// btnStyle style to look like a button
export default [
  {
    id: "nav.ourApproach",
    defMsg: "Our Approach",
    path: "/our-approach",
    dropDownLinks: [
      { id: "nav.techBehind", path: "/our-approach#techBehind" },
      { id: "nav.openData", path: "/our-approach#openData" },
      { id: "nav.faqs", path: "/our-approach#faqs" },
    ],
  },
  {
    id: "nav.ourOrg",
    defMsg: "Our Org",
    path: "/team",
    dropDownLinks: [
      { id: "nav.ourVision", path: "/our-approach#ourVision" },
      { id: "nav.ourTeam", path: "/our-approach#ourTeam" },
      { id: "nav.ourSupporters", path: "/our-approach#faqs" },
    ],
  },
  {
    id: "nav.inTheNews",
    defMsg: "In the News",
    path: "/news",
  },
  {
    id: "nav.getInvolved",
    defMsg: "GET INVOLVED",
    path: "/get-involved",
    btnStyle: true,
    classes: "text-white bg-primary py-2 px-6",
  },
];

// btnStyle style to look like a button
export default [
  {
    intlId: "nav.ourApproach",
    defMsg: "Our Approach",
    path: "/our-approach",
    dropDownLinks: [
      { intlId: "nav.techBehind", sectionId: "tech-behind" },
      { intlId: "nav.faqs", sectionId: "faq" },
    ],
  },
  {
    intlId: "nav.our-org",
    defMsg: "Our Org",
    path: "/our-org",
    dropDownLinks: [
      { intlId: "nav.ourData", sectionId: "", path: "/dashboard" },
      { intlId: "nav.ourVision", sectionId: "our-vision" },
      { intlId: "nav.ourTeam", sectionId: "our-team" },
      { intlId: "nav.ourSupporters", sectionId: "", path: "/oursupporters" },
    ],
  },
  {
    intlId: "nav.inTheNews",
    defMsg: "In the News",
    path: "/news",
  },
  {
    intlId: "nav.faqs",
    defMsg: "FAQs",
    path: "/our-approach#faq",
  },
  {
    intlId: "nav.getInvolved",
    defMsg: "GET INVOLVED",
    path: "/get-involved",
    btnStyle: true,
    classes: "text-white bg-primary py-2 px-6",
  },
];

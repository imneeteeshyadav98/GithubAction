const NAV_ROUTES = [
  {
    path: "/games",
    label: "View Game",
    labelLogo: "/icons/icon-security.svg",
    children: [],
    name: "games",
  },
  {
    path: "/company",
    label: "Company Registry",
    name: "company",
    children: [],
    labelLogo: "/icons/icon-datasets.svg",
  },
  {
    path: "/brand",
    label: "Brand",
    labelLogo: "/icons/icon-security.svg",
    children: [],
    name: "brand",
  },
  {
    path: "/PGO",
    label: "PGO",
    labelLogo: "/icons/PGO.svg",
    children: [],
    name: "PGO",
  },
  {
    path: "/pm-deals",
    label: "PM Deals",
    labelLogo: "/icons/pm-deals.svg",
    children: [],
    name: "pm-deals",
  },
  {
    path: "/areas",
    label: "Areas",
    labelLogo: "/icons/areas.svg",
    children: [],
    name: "areas",
  },

  {
    path: "/coupon-codes",
    label: "Coupon Codes",
    labelLogo: "/icons/coupon-code.svg",
    children: [],
    name: "coupon-codes",
  },

  {
    path: "?logout=true",
    label: "Logout",
    labelLogo: "/icons/logout.svg",
    children: [],
    name: "logout",
  },
];

export default NAV_ROUTES;

import {
  CustomCypressTestDevice,
  CypressTestDevice,
} from "./interface/CypressDeviceData";
import ViewportPreset = Cypress.ViewportPreset;

export const MobileTestData: CypressTestDevice[] = [
  {
    testDescription: "an iPhone-se / small mobile device.",
    device: "iphone-se2",
  },
  {
    testDescription: "an iPhone-3 / small mobile device.",
    device: "iphone-3",
  },
  {
    testDescription: "an iPhone-4 / small mobile device.",
    device: "iphone-4",
  },
  {
    testDescription: "an iPhone-5 / small mobile device.",
    device: "iphone-5",
  },
  {
    testDescription: "an iPhone-6 / medium mobile device.",
    device: "iphone-6",
  },
  {
    testDescription: "an iPhone-6+ / medium mobile device.",
    device: "iphone-6+",
  },
  {
    testDescription: "an iPhone-X / large mobile device.",
    device: "iphone-x",
  },
  {
    testDescription: "an iPhone-XR / large mobile device.",
    device: "iphone-xr",
  },
  {
    testDescription: "a Samsung Note9 / medium mobile device.",
    device: "samsung-note9",
  },
  {
    testDescription: "a Samsung S10 / small mobile device.",
    device: "samsung-s10",
  },
];
export const TabletTestData: CypressTestDevice[] = [
  {
    testDescription: "an iPad mini / small tablet device.",
    device: "ipad-mini",
  },
  {
    testDescription: "an iPad / medium tablet device.",
    device: "ipad-2",
  },
];
export const DesktopTestData: CypressTestDevice[] = [
  {
    testDescription: "an iPad mini / small tablet device.",
    device: "ipad-mini",
  },
  {
    testDescription: "an iPad / medium tablet device.",
    device: "ipad-2",
  },
  {
    testDescription: "a Macbook 11 / laptop device.",
    device: "macbook-11",
  },
  {
    testDescription: "a Macbook 13 / laptop device.",
    device: "macbook-13",
  },
  {
    testDescription: "a Macbook 15 / laptop device.",
    device: "macbook-15",
  },
  {
    testDescription: "a Macbook 16 / laptop device.",
    device: "macbook-16",
  },
];
export const CustomScreenResolutionData: CustomCypressTestDevice[] = [
  {
    testDescription: "UHD desktop [3840, 2160].",
    device: [3840, 2160],
  },
  {
    testDescription: "WQHD desktop [3440, 1440].",
    device: [3440, 1440],
  },
  {
    testDescription: "QHD desktop [2560, 1440].",
    device: [2560, 1440],
  },
  {
    testDescription: "XL desktop [1920, 1200].",
    device: [1920, 1200],
  },
  {
    testDescription: "Large desktop [1920, 1080].",
    device: [1920, 1080],
  },
  {
    testDescription: "Large desktop [1600, 900].",
    device: [1600, 900],
  },
  {
    testDescription: "Large desktop [1366, 768].",
    device: [1366, 768],
  },
  {
    testDescription: "medium desktop [1280, 1024].",
    device: [1280, 1024],
  },
  {
    testDescription: "medium desktop [1024, 720].",
    device: [1024, 720],
  },
];

export const setViewport = (viewport: ViewportPreset | number[]) => {
  if (Cypress._.isArray(viewport)) {
    cy.viewport(viewport[0], viewport[1]);
  } else {
    cy.viewport(viewport);
  }
};

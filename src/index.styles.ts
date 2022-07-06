import { createGlobalStyle } from "styled-components";
import DINNextLTProRegularWoff2 from "./assets/fonts/DINNextLTPro-Regular.woff2";
import DINNextLTProRegularEot from "./assets/fonts/DINNextLTPro-Regular.eot";
import DINNextLTProRegularTtf from "./assets/fonts/DINNextLTPro-Regular.ttf";
import DINNextLTProRegularWoff from "./assets/fonts/DINNextLTPro-Regular.woff";
import DINNextLTProBoldWoff2 from "../src/assets/fonts/DINNextLTPro-Bold.woff2";
import DINNextLTProBoldEot from "./assets/fonts/DINNextLTPro-Bold.eot";
import DINNextLTProBoldTtf from "./assets/fonts/DINNextLTPro-Bold.ttf";
import DINNextLTProBoldWoff from "./assets/fonts/DINNextLTPro-Bold.woff";
import DINNextLTProLightCondensedWoff2 from "../src/assets/fonts/DINNextLTPro-LightCondensed.woff2";
import DINNextLTProLightCondensedEot from "./assets/fonts/DINNextLTPro-LightCondensed.eot";
import DINNextLTProLightCondensedTtf from "./assets/fonts/DINNextLTPro-LightCondensed.ttf";
import DINNextLTProLightCondensedWoff from "./assets/fonts/DINNextLTPro-LightCondensed.woff";
import DINNextLTProLightWoff2 from "../src/assets/fonts/DINNextLTPro-Light.woff2";
import DINNextLTProLightEot from "./assets/fonts/DINNextLTPro-Light.eot";
import DINNextLTProLightTtf from "./assets/fonts/DINNextLTPro-Light.ttf";
import DINNextLTProLightWoff from "./assets/fonts/DINNextLTPro-Light.woff";
import DINNextLTProHeavyWoff2 from "../src/assets/fonts/DINNextLTPro-Heavy.woff2";
import DINNextLTProHeavyEot from "./assets/fonts/DINNextLTPro-Heavy.eot";
import DINNextLTProHeavyTtf from "./assets/fonts/DINNextLTPro-Heavy.ttf";
import DINNextLTProHeavyWoff from "./assets/fonts/DINNextLTPro-Heavy.woff";
import DINNextLTProBoldCondensedWoff2 from "../src/assets/fonts/DINNextLTPro-BoldCondensed.woff2";
import DINNextLTProBoldCondensedEot from "./assets/fonts/DINNextLTPro-BoldCondensed.eot";
import DINNextLTProBoldCondensedTtf from "./assets/fonts/DINNextLTPro-BoldCondensed.ttf";
import DINNextLTProBoldCondensedWoff from "./assets/fonts/DINNextLTPro-BoldCondensed.woff";

export const FontStyles = createGlobalStyle`
  @font-face {
    font-family: DINNextLTPro;
    src: url(${DINNextLTProRegularEot});
    src: url(${DINNextLTProRegularEot}?#iefix) format("embedded-opentype"), url(${DINNextLTProRegularWoff2}) format("woff2"), url(${DINNextLTProRegularWoff}) format("woff"), url(${DINNextLTProRegularTtf}) format("truetype");
    font-display: swap;
    font-weight: 400;
    font-style: normal
  }
  
  @font-face {
    font-family: DINNextLTPro;
    src: url(${DINNextLTProLightEot});
    src: url(${DINNextLTProLightEot}?#iefix) format("embedded-opentype"), url(${DINNextLTProLightWoff2}) format("woff2"), url(${DINNextLTProLightWoff}) format("woff"), url(${DINNextLTProLightTtf}) format("truetype");
    font-display: swap;
    font-weight: 100;
    font-style: normal
  }

  @font-face {
    font-family: DINNextLTPro;
    src: url(${DINNextLTProLightCondensedEot});
    src: url(${DINNextLTProLightCondensedEot}?#iefix) format("embedded-opentype"), url(${DINNextLTProLightCondensedWoff2}) format("woff2"), url(${DINNextLTProLightCondensedWoff}) format("woff"), url(${DINNextLTProLightCondensedTtf}) format("truetype");
    font-display: swap;
    font-weight: 200;
    font-style: normal
  }

  @font-face {
    font-family: DINNextLTPro;
    src: url(${DINNextLTProBoldEot});
    src: url(${DINNextLTProBoldEot}?#iefix) format("embedded-opentype"), url(${DINNextLTProBoldWoff2}) format("woff2"), url(${DINNextLTProBoldWoff}) format("woff"), url(${DINNextLTProBoldTtf}) format("truetype");
    font-display: swap;
    font-weight: 600;
    font-style: normal
  }

  @font-face {
    font-family: DINNextLTPro;
    src: url(${DINNextLTProBoldCondensedEot});
    src: url(${DINNextLTProBoldCondensedEot}?#iefix) format("embedded-opentype"), url(${DINNextLTProBoldCondensedWoff2}) format("woff2"), url(${DINNextLTProBoldCondensedWoff}) format("woff"), url(${DINNextLTProBoldCondensedTtf}) format("truetype");
    font-display: swap;
    font-weight: 700;
    font-style: normal
  }

  @font-face {
    font-family: DINNextLTPro;
    src: url(${DINNextLTProHeavyEot});
    src: url(${DINNextLTProHeavyEot}?#iefix) format("embedded-opentype"), url(${DINNextLTProHeavyWoff2}) format("woff2"), url(${DINNextLTProHeavyWoff}) format("woff"), url(${DINNextLTProHeavyTtf}) format("truetype");
    font-display: swap;
    font-weight: 900;
    font-style: normal
  }
`;

const screenSize = {
  mobileXS: "320px",
  mobileS: "360px",
  mobileSLandscape: "599px",
  mobileL: "480px",
  mobileXL: "896px",
  tabletLowRes: "481px",
  mobileLandscape: "767px",
  tabletLandscape: "768px",
  samsungSurface: "911px",
  iPadLandscape: "1024px",
  laptop: "1025px",
  desktop: "1280px",
  desktopM: "1281px",
  desktopL: "1599px",
  desktopXL: "1600px",
  tabletS: "600px",
  tabletSLandscape: "900px",
  tabletLargeLandscape: "1367px",
};
// 1920

export const screenMediaQuery = {
  mobilePortraitXS: `(min-width: ${screenSize.mobileXS}) and (max-width: ${screenSize.mobileS}) and (orientation: portrait)`,
  mobilePortraitSmallHeight: `(min-width: ${screenSize.mobileXS}) and (max-width: ${screenSize.mobileL}) and (max-height: 667px) and (orientation: portrait)`,
  mobilePortrait: `(min-width: ${screenSize.mobileXS}) and (max-width: ${screenSize.mobileL}) and (orientation: portrait)`,
  mobileLandscape: `(min-width: ${screenSize.mobileXS}) and (max-width: ${screenSize.mobileXL}) and (max-height: 677px) and (orientation: landscape)`,
  tabletAndMobilePortrait: `(min-width: ${screenSize.tabletLowRes}) and (max-width: ${screenSize.mobileSLandscape}) and (orientation: portrait)`,
  tabletAndMobileLandscape: `(min-width: ${screenSize.tabletLowRes}) and (max-width: ${screenSize.mobileLandscape}) and (orientation: landscape)`,
  tabletAndiPadLandscape: `(min-width: ${screenSize.tabletLandscape}) and (max-width: ${screenSize.tabletSLandscape}) and (min-height: 678px) and (orientation: landscape)`,
  tabletSmallPortrait: `(min-width: ${screenSize.tabletS}) and (max-width: ${screenSize.mobileLandscape}) and (orientation: portrait)`,
  tabletSmallLandscape: `(min-width: ${screenSize.tabletSLandscape}) and (max-width: ${screenSize.iPadLandscape}) and (orientation: landscape)`,
  iPadMiniPortrait: `(min-width: ${screenSize.tabletLandscape}) and (max-width: ${screenSize.samsungSurface}) and (orientation: portrait)`,
  iPadMiniLandscape: `(min-width: ${screenSize.iPadLandscape}) and (max-width: ${screenSize.iPadLandscape}) and (orientation: landscape)`,
  tabletAndiPadPortrait: `(min-width: ${screenSize.tabletLandscape}) and (max-width: ${screenSize.iPadLandscape}) and (orientation: portrait)`,
  laptopAndDesktop: `(min-width: ${screenSize.laptop}) and (max-width: ${screenSize.desktop})`,
  desktopMedium: `(min-width: ${screenSize.desktopM}) and (max-width: ${screenSize.tabletLargeLandscape})`,
  tabletLarge: `(min-width: ${screenSize.tabletLargeLandscape}) and (max-width: ${screenSize.desktopL})`,
  desktopLarge: `(min-width: ${screenSize.desktopXL})`,
};

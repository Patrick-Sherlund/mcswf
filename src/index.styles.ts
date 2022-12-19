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

import { createTheme } from "@nextui-org/react";

const orange200 = "#fdae93";
const orange300 = "#fc9067";
const orange400 = "#fb7846";
const orange500 = "#fb6225";
const orange600 = "#f05a21";
const orange700 = "#e2551c";

const blue200 = "#7fd4f6";
const blue300 = "#4cc2f2";
const blue400 = "#21b5f0";
const blue500 = "#00a8ee";
const blue600 = "#009bdf";
const blue700 = "#0088cc";

const white = "#ffffff";

const lightGray = "#b9b9b9";

export const theme = createTheme({
  type: "light", // it could be "light" or "dark"
  theme: {
    colors: {
      primaryLight: orange200,
      primaryLightHover: orange300,
      primaryLightActive: orange400,
      primaryLightContrast: orange600,
      primary: orange600,
      primaryBorder: orange500,
      primaryBorderHover: orange600,
      primarySolidHover: orange700,
      primarySolidContrast: white,
      primaryShadow: orange500,

      
      secondaryLight: blue200,
      secondaryLightHover: blue300,
      secondaryLightActive: blue400,
      secondaryLightContrast: blue600,
      secondary: blue600,
      secondaryBorder: blue500,
      secondaryBorderHover: blue600,
      secondarySolidHover: blue700,
      secondarySolidContrast: white,
      secondaryShadow: blue500,

      btbOrange: orange600,
      btbOrange200: orange200,
      btbOrange300: orange300,
      btbOrange400: orange400,
      btbOrange500: orange500,
      btbOrange600: orange600,
      btbOrange700: orange700,
      textSecondary: lightGray,
    },
    space: {},
    fonts: {}
  }
})
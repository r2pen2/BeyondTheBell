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

      text: "#666666",
      success: "#A6C437",
      white: "#ffffff",

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
      btbOrange300: orange200,
      btbOrange400: orange400,
      btbOrange500: orange500,
      btbOrange600: orange600,
      btbOrange700: orange700,
      textSecondary: lightGray,
    },
    space: {},
    fonts: {},
    fontSizes: {
      xs: '0.875rem', /* 14px */
      sm: '1rem', /* 16px */
      base: '1.125rem', /* 18px */
      md: '1.125rem', /* 18px */
      lg: '1.25rem', /* 20px */
      xl: '1.5rem', /* 24px */
      '2xl': '1.875rem', /* 30px */
      '3xl': '2.25rem', /* 36px */
      '4xl': '3rem', /* 48px */
      '5xl': '3.75rem', /* 60px */
      '6xl': '4.5rem', /* 72px */
      '7xl': '6rem', /* 96px */
      '8xl': '8rem', /* 128px */
      '9xl': '10rem', /* 144px */
    },
  }
})
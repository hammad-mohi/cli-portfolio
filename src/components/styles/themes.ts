import { DefaultTheme } from "styled-components";

export type Themes = {
  [key: string]: DefaultTheme;
};

const theme: Themes = {
  dark: {
    id: "T_001",
    name: "dark",
    colors: {
      body: "#1D2A35",
      scrollHandle: "#19252E",
      scrollHandleHover: "#162028",
      primary: "#05CE91",
      secondary: "#FF9D00",
      text: {
        100: "#cbd5e1",
        200: "#B2BDCC",
        300: "#64748b",
      },
    },
  },
  light: {
    id: "T_002",
    name: "light",
    colors: {
      body: "#EFF3F3",
      scrollHandle: "#C1C1C1",
      scrollHandleHover: "#AAAAAA",
      primary: "#027474",
      secondary: "#FF9D00",
      text: {
        100: "#334155",
        200: "#475569",
        300: "#64748b",
      },
    },
  },
  matrix: {
    id: "T_003",
    name: "matrix",
    colors: {
      body: "#000000",
      scrollHandle: "#2E2E2E",
      scrollHandleHover: "#414141",
      primary: "#E5E500",
      secondary: "#04A500",
      text: {
        100: "#01FF00",
        200: "#04A5B2",
        300: "#E50101",
      },
    },
  },
  ubuntu: {
    id: "T_004",
    name: "ubuntu",
    colors: {
      body: "#2D0922",
      scrollHandle: "#F47845",
      scrollHandleHover: "#E65F31",
      primary: "#80D932",
      secondary: "#F47845",
      text: {
        100: "#FFFFFF",
        200: "#E1E9CC",
        300: "#CDCDCD",
      },
    },
  },
};

export default theme;

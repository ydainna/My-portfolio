import { redColor, primaryColor, secondaryColor } from "./Colors";

export function createPalette() {
  return {
    action: {
      active: "#fff",
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      focus: "rgba(255, 255, 255, 0.12)",
      hover: "rgba(255, 255, 255, 0.08)",
      selected: "rgba(255, 255, 255, 0.16)",
    },
    background: {
      default: "hsl(213, 29%, 15%)",
      paper: "hsl(213, 29%, 15%)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    mode: "dark",
    redColor,
    primary: primaryColor,
    secondary: secondaryColor,
  };
}

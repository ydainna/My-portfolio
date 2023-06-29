import { common } from "@mui/material/colors";
import { outlinedInputClasses } from "@mui/material";

type Config = {
  palette: any;
};

export function createComponents({ palette }: Config) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: common.black,
          fontSize: 14,
        },
        arrow: {
          color: common.black,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "::selection": {
          backgroundColor: "hsl(220, 41%, 45%)",
          color: common.white,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          [`&.${outlinedInputClasses.focused}`]: {
            backgroundColor: "transparent",
            [`& .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: palette.secondary.main,
            },
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          [`&.${outlinedInputClasses.focused}`]: {
            color: palette.secondary.main,
          },
        },
      },
    },
  };
}

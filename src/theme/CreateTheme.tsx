import { createTheme as createMuiTheme } from "@mui/material";
import { createPalette } from "./Create-palette";
import { createComponents } from "./Create-components";

export function CreateTheme() {
  const palette: any = createPalette();
  const components: any = createComponents({ palette });

  return createMuiTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1440,
      },
    },
    components,
    palette,
    shape: {
      borderRadius: 8,
    },
  });
}

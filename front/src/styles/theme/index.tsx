import { createMuiTheme, Theme, ThemeOptions } from "@material-ui/core";
import createPalette from "@material-ui/core/styles/createPalette";

const theme: ThemeOptions = {
  palette: createPalette({
    correct: "#6ae26a",
    wrong: "#ff4b4b",
  }),
};

export const muiTheme = createMuiTheme(theme);

export interface MyTheme {}

export interface MyPalette {
  correct: string;
  wrong: string;
}

declare module "@material-ui/core/styles/createMuiTheme" {
  export interface ThemeOptions extends Partial<Theme> {}
  export interface Theme extends MyTheme {}
}

declare module "@material-ui/core/styles/createPalette" {
  export interface Palette extends MyPalette {}
  export interface PaletteOptions extends Partial<Palette> {}
}

declare module "styled-components" {
  export interface DefaultTheme extends CustomThemeAndMuiTheme {}
}

type CustomThemeAndMuiTheme = Theme & MyTheme;

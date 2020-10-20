import { createMuiTheme, Theme, ThemeOptions } from "@material-ui/core";

const theme: ThemeOptions = {};

export const muiTheme = createMuiTheme(theme);

export type MyTheme = typeof theme;

declare module "@material-ui/core/styles/createMuiTheme" {
  export interface ThemeOptions extends Partial<CustomTheme> {}
  export interface Theme extends CustomTheme {}
}
declare module "styled-components" {
  export interface DefaultTheme extends CustomThemeAndMuiTheme {}
}

type CustomTheme = typeof theme;

type CustomThemeAndMuiTheme = Theme & CustomTheme;

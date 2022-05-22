import { theme } from './theme'
import { BreakpointsOptions } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { TypographyOptions } from '@mui/material/styles/createTypography'
import { PaletteOptions } from '@mui/material/styles/createPalette'

const breakpoints: BreakpointsOptions = {
  values: {
    xs: 0 as number,
    sm: 600 as number,
    md: 900 as number,
    lg: 1200 as number,
    xl: 1536 as number,
  },
}


const typography: TypographyOptions = {
  htmlFontSize: 20,
  fontFamily: 'Roboto, serif',
  h1: {
    fontWeight: 500,
  },
  h2: {
    fontWeight: 500,
  },
  h3: {
    fontWeight: 500,
  },

  h4: {
    fontWeight: 500,
    fontSize: '2rem',
    [`@media screen and (min-width: ${breakpoints.values?.md}px)`]: {
      fontSize: "3rem",
    },
    [`@media screen and (min-width: ${breakpoints.values?.xl}px)`]: {
      fontSize: "4rem",
    },
  },

  h5: {
    fontWeight: 400,
    fontSize: '1.5rem',
    [`@media screen and (min-width: ${breakpoints.values?.md}px)`]: {
      fontSize: "1.7rem",
    },
    [`@media screen and (min-width: ${breakpoints.values?.xl}px)`]: {
      fontSize: "1.9rem",
    },
  },

  h6: {
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '18.2px',
    fontFamily: 'Roboto',
    [`@media screen and (min-width: ${breakpoints.values?.md}px)`]: {
      fontSize: "18px",
    },
    [`@media screen and (min-width: ${breakpoints.values?.xl}px)`]: {
      fontSize: "22px",
    },
  },

  fontWeightBold: 500,
  fontWeightLight: 300,

}


const palette: PaletteOptions = {
  primary: {
    main: theme.colors.primary,
    light: `${theme.colors.primary}35`,
    contrastText: theme.colors.white,
  },
  secondary: {
    main: theme.colors.secondary,
    light: `${theme.colors.secondary}35`,
    contrastText: theme.colors.white,
  },
  error: {
    main: theme.colors.error,
  },
  warning: {
    main: theme.colors.warning,
  },
  info: {
    main: theme.colors.info,
  },
  success: {
    main: theme.colors.success,
  },
  common: {
    black: theme.colors.black,
    white: theme.colors.white,
  },
  text: {
    primary: theme.colors.black,
    disabled: theme.colors.disabled,
    secondary: theme.colors.darkGrey,
  },
  background: {
    default: theme.colors.grey,
    paper: theme.colors.white,
  },
  tonalOffset: 0.2,
}

export const muiTheme = createTheme({
  breakpoints,
  typography,
  palette,
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          margin: '10px 0',
          minWidth: '100%'

        },
      },
    },
  },
})

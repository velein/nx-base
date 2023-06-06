import { PaletteOptions } from '@mui/material/styles';

/**
 * @see https://material-ui.com/customization/palette/
 */
export const palette: PaletteOptions = {
  primary: {
    main: '#4DA140',
    light: '#87C87F',
    dark: '#367E2C',
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: '#97A15A',
    light: '#CCD5AE',
    dark: '#535835',
    contrastText: '#FFFFFF',
  },
  info: {
    main: '#4293C7',
    light: '#89D0EB',
    dark: '#0564A2',
  },
  success: {
    main: '#4DA140',
    light: '#87C87F',
    dark: '#367E2C',
    contrastText: '#FFFFFF',
  },
  warning: {
    main: '#F4D44E',
    light: '#FFEE97',
    dark: '#C39500',
  },
  error: {
    main: '#DF3A07',
    light: '#FF8760',
    dark: '#C72A00',
  },
  text: {
    primary: '#3F4144',
    secondary: '#7C8082',
    disabled: '#A4AAAF',
  },
  divider: '#A4AAAF',
  action: {
    hover: 'rgba(164, 170, 175, 0.08)',
    selected: 'rgba(164, 170, 175, 0.16)',
    disabled: 'rgba(164, 170, 175, 0.8)',
    focus: 'rgba(164, 170, 175, .24)',
    disabledOpacity: 1,
    hoverOpacity: 0.08,
  },
} as const;

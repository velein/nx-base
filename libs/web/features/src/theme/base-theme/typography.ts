import { TypographyOptions } from '@mui/material/styles/createTypography';

import { palette } from './palette';

export const typography: TypographyOptions = {
  h1: {
    fontSize: '36px',
    lineHeight: 1.5,
    letterSpacing: '-1px',
    fontWeight: 600,
    color: palette?.text?.primary,
  },
  h2: {
    fontSize: '32px',
    lineHeight: 1.5,
    letterSpacing: '-0.5px',
    fontWeight: 600,
    color: palette?.text?.primary,
  },
  h3: {
    fontSize: '28px',
    lineHeight: 1.5,
    letterSpacing: '0',
    fontWeight: 600,
    color: palette?.text?.primary,
  },
  h4: {
    fontSize: '24px',
    lineHeight: 1.5,
    letterSpacing: '0.25px',
    fontWeight: 600,
    color: palette?.text?.primary,
  },
  h5: {
    fontSize: '20px',
    lineHeight: '30px',
    letterSpacing: '0',
    fontWeight: 600,
    color: palette?.text?.primary,
  },
  h6: {
    fontSize: '18px',
    lineHeight: '27px',
    letterSpacing: '0.15px',
    fontWeight: 600,
    color: palette?.text?.primary,
  },
  body1: {
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.5',
    fontWeight: 400,
    color: palette?.text?.primary,
  },
  body2: {
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0.25',
    fontWeight: 400,
    color: palette?.text?.primary,
  },
  button: {
    fontSize: '13px',
    lineHeight: '20px',
    letterSpacing: '0.25',
    fontWeight: 500,
    textTransform: 'none',
    marginTop: '16px',
    marginBottom: '16px',
  },
  caption: {
    fontSize: '12px',
    lineHeight: '18px',
    letterSpacing: '0.5',
    fontWeight: 400,
  },
  overline: {
    fontSize: '10px',
    lineHeight: '16px',
    letterSpacing: '1.5',
    fontWeight: 400,
  },
};

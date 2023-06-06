import { createTheme } from '@mui/material/styles';
import { palette } from './palette';
import { typography } from './typography';

/**
 * The base theme settings are a reusable set of theme settings that can be
 * extended by other themes. Those settings should be a base for all future
 * themes.
 */
export const createAppTheme = () =>
  createTheme({
    palette,
    typography,
  });

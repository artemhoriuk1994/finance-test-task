import { createTheme } from '@mui/material/styles'
import { PALETTE as palette } from './palette';

export const SCREEN_BREAKPOINTS = {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1355,
    xl: 1920,
};

export const MAIN_THEME = createTheme({
    palette
})
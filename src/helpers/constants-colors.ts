import {createMuiTheme} from '@material-ui/core/styles';

export const paletteColors: any = {
    palette: {
        type: 'dark',
        primary: {
            main: '#4d6f96',
            contrastText: '#ffffff',
            light: '#a2b0bf',
            dark: '#3d5775',
        },
        secondary: {
            main: '#987338',
        },
        info: {
            main: '#8db7d8',
        },
    },
};

export const solidTheme = createMuiTheme(paletteColors);

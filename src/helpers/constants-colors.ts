import {createMuiTheme} from '@material-ui/core/styles';

export const paletteColors: any = {
    palette: {
        type: 'dark',
        primary: {
            main: '#4d6f96',
            contrastText: '#ffffff',
            light: '#7e8a96',
            dark: '#3d5775',
        },
        secondary: {
            main: '#987338',
        },
        hover: {
            active: '#7e8a96',
            activeLight: '#ffffff',
        },
        risk: {
            1: '#009432',
            2: '#C4E538',
            3: '#FFC312',
            4: '#EE5A24',
            5: '#EA2027',
        },
        form: {
            background: '#2f445c',
            border: '#487eb0',
        },
        info: {
            main: '#8db7d8',
        },
    },
};

export const solidTheme = createMuiTheme(paletteColors);

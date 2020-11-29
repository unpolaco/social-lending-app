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
        status: {
            active: '#FFC312',
            activeComplete: '#009432',
            archived: '#5a5a5a',
            unconfirmed: '#8e44ad',
            repaid: '#3d5775',
            completed: '#5a5a5a',
        },
        repayment: {
            expected: '#C4E538',
            paid: '#7e8a96',
        },
        form: {
            background: '#2f445c',
            border: '#487eb0',
        },
        page: {
            lightBackground: ' #4b4b4b',
            lightestBackground: ' #7e8a96',
        },
        info: {
            main: '#8db7d8',
        },
    },
    typography: {
        fontFamily: 'Poppins',
    },
};

export const solidTheme = createMuiTheme(paletteColors);

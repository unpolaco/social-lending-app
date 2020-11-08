import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import styled from '@emotion/styled';
import {TableRow, Typography} from '@material-ui/core/';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        paper: {
            width: '100%',
            marginBottom: theme.spacing(2),
        },
        table: {
            minWidth: 750,
        },
        visuallyHidden: {
            border: 0,
            clip: 'rect(0 0 0 0)',
            height: 1,
            margin: -1,
            overflow: 'hidden',
            padding: 0,
            position: 'absolute',
            top: 20,
            width: 1,
        },
    }),
);

export const TextBold = styled(Typography)`
    font-weight: 500;
    font-size: 17px;
`;

export const StyledTableRow = styled(TableRow)`
    padding: 0 15px;
    transition: 0.3s;
    border-radius: 10px;
    &:hover {
        background-color: #a4b0be;
    }
`;

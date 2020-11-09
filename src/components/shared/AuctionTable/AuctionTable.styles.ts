import styled from '@emotion/styled';
import {TableRow, Typography} from '@material-ui/core/';

export const TextBold = styled(Typography)`
    font-weight: 500;
    font-size: 17px;
`;
export const StyledTableRow = styled(TableRow)`
    padding: 0 15px;
    width: 100%;
    transition: 0.3s;
    border-radius: 10px;
    &:hover {
        background-color: #a4b0be;
    }
`;

import styled from '@emotion/styled';
import {TableRow, Typography, TableCell, Box} from '@material-ui/core/';

export const TextBold = styled(Typography)`
    font-weight: 500;
    font-size: 17px;
`;
export const StyledTableRow = styled(TableRow)`
    padding: 0 15px;
    width: 80%;
    margin: 15px;
    transition: 0.3s;
    &:hover {
        background-color: #a4b0be;
    }
`;
export const WideCell = styled(TableCell)`
    display: flex;
    justify-content: flex-end;
`;
export const NarrowCell = styled(TableCell)`
    width: 10%;
`;
export const CollapsedCell = styled(TableCell)`
    padding: 0;
`;
export const StyledBox = styled(Box)`
    margin: 0 30px;
`;

import styled from '@emotion/styled';
import {TableRow, TableCell, Box} from '@material-ui/core/';
import {paletteColors} from '../../../helpers/constants-colors';

const {palette} = paletteColors;

export const Text = styled.p`
    font-weight: 400;
    font-size: 15px;
`;
export const StyledTableRow = styled(TableRow)`
    padding: 0 15px;
    width: 80%;
    margin: 15px;
`;
export const StyledTableRowHover = styled(StyledTableRow)`
    transition: 0.3s;
    &:hover {
        background-color: #a4b0be;
    }
`;
export const WideCell = styled(TableCell)`
    display: flex;
    justify-content: flex-end;
    flex: 1;
    cursor: pointer;
`;
export const NarrowCell = styled(TableCell)`
    cursor: pointer;
    flex: 1;
`;
export const CollapsedCell = styled(TableCell)`
    padding: 0;
`;
export const StyledBox = styled(Box)`
    margin: 0 30px;
`;
export const StatusIcon = styled.div`
    border-radius: 50%;
    width: 15px;
    height: 15px;
    ${({color}) => color === 'ACTIVE' && `background: ${palette.status.active}`};
    ${({color}) => color === 'ACTIVE_COMPLETE' && `background: ${palette.status.activeComplete}`};
    ${({color}) => color === 'ARCHIVED' && `background: ${palette.status.archived}`};
    ${({color}) => color === 'UNCONFIRMED' && `background: ${palette.status.unconfirmed}`};
    ${({color}) => color === 'REPAID' && `background: ${palette.status.repaid}`};
    ${({color}) => color === 'COMPLETED' && `background: ${palette.status.completed}`};
`;

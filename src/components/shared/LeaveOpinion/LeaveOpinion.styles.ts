import styled from '@emotion/styled';
import {TableRow, TableCell, Button, Box} from '@material-ui/core/';
import {paletteColors} from '../../../helpers/constants-colors';

const {palette} = paletteColors;

export const FormikWrapper = styled.div`
    padding: 20px;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 5px;
    border: 1px solid ${palette.form.border};
    width: 300px;
`;
export const Text = styled.p`
    font-weight: 400;
    font-size: 15px;
`;
export const TestButton = styled(Button)`
    z-index: 100000;
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

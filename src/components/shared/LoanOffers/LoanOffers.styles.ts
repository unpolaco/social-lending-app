import styled from '@emotion/styled';
import {Box} from '@material-ui/core/';
import {paletteColors} from '../../../helpers/constants-colors';

export const Text = styled.p`
    font-weight: 400;
    font-size: 15px;
`;
export const StyledBox = styled(Box)`
    border-radius: 5px;
    border: 1px solid ${paletteColors.palette.form.border};
    margin: 8px;
    padding: 8px;
    text-align: center;
`;
export const OffersWrapper = styled(Box)`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex: 1;
`;

import styled from '@emotion/styled';
import {paletteColors} from '../../helpers/constants-colors';

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    background-color: ${paletteColors.palette.primary.main};
    color: white;
    padding: 0 30px;
`;

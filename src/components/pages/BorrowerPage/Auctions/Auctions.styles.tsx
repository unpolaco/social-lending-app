import styled from '@emotion/styled';
import {paletteColors} from '../../../../helpers/constants-colors';

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    margin-top: 15px;
    border-radius: 5px;
    background-color: ${paletteColors.palette.page.lightBackground};
`;
export const Title = styled.p`
    line-height: 50px;
    font-size: 18px;
    font-weight: 600;
`;

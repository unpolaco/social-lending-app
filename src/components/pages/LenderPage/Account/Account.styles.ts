import styled from '@emotion/styled';
import {Card} from '@material-ui/core/';
import {paletteColors} from '../../../../helpers/constants-colors';

export const PageWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 15px;
    margin-top: 15px;
    border-radius: 5px;
    background-color: ${paletteColors.palette.page.lightBackground};
    height: 90%;
`;
export const TextBold = styled.p`
    font-weight: 500;
    font-size: 17px;
    margin: 5px;
`;
export const TextLight = styled.p`
    margin: 5px;
    font-weight: 400;
    font-size: 12px;
    color: grey;
`;
export const StyledCard = styled(Card)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 15px;
    width: 400px;
`;
export const Title = styled.p`
    line-height: 50px;
    font-size: 18px;
    font-weight: 600;
`;

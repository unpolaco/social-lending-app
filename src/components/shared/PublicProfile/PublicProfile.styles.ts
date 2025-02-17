import styled from '@emotion/styled';
import {Card, Button} from '@material-ui/core/';
import {paletteColors} from '../../../helpers/constants-colors';
const {palette} = paletteColors;

export const PageWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 15px;
    margin-top: 15px;
    border-radius: 5px;
    background-color: ${palette.page.lightBackground};
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
`;
export const TextOpinion = styled.p`
    font-weight: 400;
    font-size: 14px;
`;
export const StyledCard = styled(Card)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 15px;
    width: 100%;
    && {
        background-color: ${palette.page.lightestBackground};
    }
`;
export const StyledOpinionCard = styled(Card)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1;
    width: 100%;
    padding: 10px;
    margin-top: 8px;
`;
export const Title = styled.p`
    line-height: 50px;
    font-size: 18px;
    font-weight: 600;
`;
export const StyledButton = styled(Button)`
    && {
        margin: 10px;
    }
`;

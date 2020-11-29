import {Card, Button} from '@material-ui/core/';
import styled from '@emotion/styled';

export const Text = styled.p`
    font-weight: 400;
    font-size: 15px;
`;
export const StyledButton = styled(Button)`
    && {
        margin: 10px;
    }
`;
export const StyledOpinionCard = styled(Card)`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    width: 580px;
    padding: 10px;
    margin-top: 8px;
`;

import styled from '@emotion/styled';
import {Card} from '@material-ui/core/';
import {paletteColors} from '../../../helpers/constants-colors';

export const StyledCard = styled(Card)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    padding: 8px;
`;
export const TextBold = styled.p`
    font-weight: 500;
    font-size: 20px;
    margin: 20px;
`;
export const Text = styled.p`
    font-weight: 400;
    font-size: 16px;
    margin: 20px;
`;
export const Wrapper = styled.div`
    border-radius: 5px;
    border: 1px solid ${paletteColors.palette.form.border};
    margin: 8px;
    text-align: center;
`;
export const Title = styled.p`
    line-height: 50px;
    font-size: 18px;
    font-weight: 600;
`;

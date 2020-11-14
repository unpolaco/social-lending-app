import styled from '@emotion/styled';
import {Box, Typography} from '@material-ui/core/';

export const TextBold = styled(Typography)`
    font-weight: 500;
    font-size: 17px;
`;
export const CreateOfferWrapper = styled.div`
    border-radius: 5px;
    padding: 8px;
    width: 100%;
    text-align: center;
`;
export const FormikWrapper = styled.div`
    padding: 20px;
    border: 1px solid white;
    display: flex;
    flex-direction: column;
    height: 300px;
    justify-content: space-between;
    border-radius: 5px;
    width: 300px;
`;
export const FieldWrapper = styled.div`
    flex: 1;
    padding: 0 15px;
`;
export const FieldTitleTypography = styled.p`
    font-size: 17px;
    font-weight: 500;
    margin-bottom: 15px;
`;
export const StyledBox = styled(Box)`
    border-radius: 5px;
    border: 1px solid #487eb0;
    width: 150px;
    margin: 8px;
    padding: 8px;
    text-align: center;
`;
export const OffersWrapper = styled(Box)`
    display: flex;
    flex-wrap: wrap;
    flex: 1;
`;

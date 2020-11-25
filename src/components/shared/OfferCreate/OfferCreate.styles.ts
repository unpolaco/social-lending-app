import styled from '@emotion/styled';
import {paletteColors} from '../../../helpers/constants-colors';
const {palette} = paletteColors;

export const Text = styled.p`
    font-weight: 400;
    font-size: 15px;
`;
export const CreateOfferWrapper = styled.div`
    border-radius: 5px;
    padding: 8px;
    width: 100%;
    text-align: center;
`;
export const FormikWrapper = styled.div`
    padding: 20px;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 5px;
    border: 1px solid ${palette.form.border};
    background-color: ${palette.form.background};
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

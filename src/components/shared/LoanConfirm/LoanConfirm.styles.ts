import styled from '@emotion/styled';
import {paletteColors} from '../../../helpers/constants-colors';

const {palette} = paletteColors;

export const TextBold = styled.p`
    font-weight: 500;
    font-size: 17px;
`;
export const Text = styled.p`
    font-weight: 500;
    font-size: 15px;
    color: white;
`;
export const TextLight = styled.p`
    font-weight: 400;
    font-size: 15px;
    text-align: left;
    color: #bdc3c7;
    width: 150px;
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
export const Title = styled.p`
    line-height: 50px;
    font-size: 18px;
    font-weight: 600;
`;
export const ScheduleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px;
    ${({color}) => color === 'PAID' && `color: ${palette.repayment.paid}`}
    ${({color}) => color === 'LATE' && `color: ${palette.repayment.late}`}
    ${({color}) => color === 'EXPECTED' && `color: ${palette.repayment.expected}`}
`;
export const FieldWrapper = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-between;
    padding: 5px 0;
`;

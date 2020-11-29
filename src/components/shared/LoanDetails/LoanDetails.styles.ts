import styled from '@emotion/styled';
import {paletteColors} from '../../../helpers/constants-colors';

const {palette} = paletteColors;

export const Text = styled.p`
    font-weight: 400;
    font-size: 15px;
`;
export const TextLight = styled.p`
    font-weight: 400;
    font-size: 14px;
    text-align: right;
    color: grey;
    width: 150px;
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
export const RepaymentWrapper = styled.div`
    display: flex;
    width: 150px;
    flex-direction: column;
    align-items: flex-end;
`;
export const LoanDetailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    border: 1px solid ${palette.form.border};
    margin: 20px 0;
`;

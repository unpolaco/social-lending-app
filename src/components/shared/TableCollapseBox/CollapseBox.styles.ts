import styled from '@emotion/styled';
import {Box, Typography} from '@material-ui/core/';
import {paletteColors} from '../../../helpers/constants-colors';

const {palette} = paletteColors;

export const TextBold = styled(Typography)`
    font-weight: 500;
    font-size: 17px;
`;
export const TextLight = styled(Typography)`
    font-weight: 400;
    font-size: 14px;
    color: grey;
`;
export const CreateOfferWrapper = styled.div`
    border-radius: 5px;
    padding: 8px;
    width: 100%;
    text-align: center;
`;
export const FormikWrapper = styled.div`
    padding: 20px;
    border: 1px solid ${palette.form.border};
    background-color: ${palette.form.background};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 5px;
    width: 300px;
`;

export const ScheduleWrapper = styled.div`
    display: flex;
    border-top: 1px solid grey;
    justify-content: space-between;
    margin: 8px;
    color: ${props =>
        props.color === 'PAID' ? palette.repayment.paid : props.color === 'LATE' ? palette.repayment.late : palette.repayment.expected};
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
    border: 1px solid ${paletteColors.palette.form.border};
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
`;

import React from 'react';
import {Button, CircularProgress} from '@material-ui/core/';
import {useGetConfirmCreateLoan} from '../../../hooks/api/loan/useGetConfirmCreateLoan';
import {FormikWrapper, Text, TextLight, FieldWrapper} from './LoanConfirm.styles';
import {useHistory} from 'react-router-dom';
import {ROUTES} from '../../../helpers/routes';
import {LoanOffers} from '../LoanOffers/LoanOffers';

export const LoanConfirm: React.FC<any> = ({loanDetails}) => {
    const {isFetchingConfirmCreateLoan, isErrorConfirmCreateLoan, fetchConfirmCreateLoan} = useGetConfirmCreateLoan();
    const history = useHistory();

    if (isFetchingConfirmCreateLoan) {
        return <CircularProgress />;
    }
    if (isErrorConfirmCreateLoan) {
        alert('Error');
    }
    function handleConfirmCreateLoan() {
        fetchConfirmCreateLoan(loanDetails?.id);
        history.push(ROUTES.BORROWER_COMMITMENTS_LOANS);
    }
    return (
        <>
            {loanDetails && (
                <FormikWrapper>
                    <Text>You are creating a loan with parameters above:</Text>
                    <FieldWrapper>
                        <TextLight>Amount to borrow </TextLight>
                        <Text>{loanDetails.amount} zł</Text>
                    </FieldWrapper>
                    <FieldWrapper>
                        <TextLight>Amount to return </TextLight>
                        <Text>{loanDetails.repayment} zł</Text>
                    </FieldWrapper>
                    <FieldWrapper>
                        <TextLight>Rate </TextLight>
                        <Text>{loanDetails.rate} %</Text>
                    </FieldWrapper>
                    <FieldWrapper>
                        <TextLight>Duration </TextLight>
                        <Text>{loanDetails.duration} months</Text>
                    </FieldWrapper>
                    <LoanOffers row={loanDetails} />
                    <Button onClick={handleConfirmCreateLoan} variant="outlined">
                        CONFIRM
                    </Button>
                </FormikWrapper>
            )}
        </>
    );
};

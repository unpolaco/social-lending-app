import React from 'react';
import {Button, CircularProgress} from '@material-ui/core/';
import {useGetConfirmCreateLoan} from '../../../hooks/useGetConfirmCreateLoan';
import {FormikWrapper, Text, TextLight} from './LoanConfirm.styles';
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
                    <TextLight>Amount to borrow </TextLight>
                    <Text>{loanDetails.amount} zł</Text>
                    <Text>Amount to return {loanDetails.repayment} zł</Text>
                    <Text>Duration {loanDetails.duration} months</Text>
                    <Text>Rate {loanDetails.rate} %</Text>
                    <LoanOffers row={loanDetails} />
                    <Button onClick={handleConfirmCreateLoan} variant="outlined">
                        CONFIRM
                    </Button>
                </FormikWrapper>
            )}
        </>
    );
};

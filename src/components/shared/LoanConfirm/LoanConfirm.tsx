import React from 'react';
import {Button, CircularProgress} from '@material-ui/core/';
import {useGetConfirmCreateLoan} from '../../../hooks/useGetConfirmCreateLoan';
import {FormikWrapper, Text} from './LoanConfirm.styles';
import {useHistory} from 'react-router-dom';
import {ROUTES} from '../../../helpers/routes';

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
                    <Text>Amount {loanDetails.amount} zł</Text>
                    <Text>Duration {loanDetails.duration} months</Text>
                    <Text>Rate {loanDetails.rate} %</Text>
                    <Button onClick={handleConfirmCreateLoan} variant="outlined">
                        CONFIRM
                    </Button>
                </FormikWrapper>
            )}
        </>
    );
};

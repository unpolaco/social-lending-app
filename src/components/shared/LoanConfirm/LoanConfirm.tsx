import React from 'react';
import {Button} from '@material-ui/core/';
import {useGetConfirmCreateLoan} from '../../../hooks/api/loan/useGetConfirmCreateLoan';
import {FormikWrapper, Text, TextLight, FieldWrapper} from './LoanConfirm.styles';
import {useHistory} from 'react-router-dom';
import {ROUTES} from '../../../helpers/routes';
import {LoanOffers} from '../LoanOffers/LoanOffers';
import {AlertSnackBar} from '../Alert/AlertSnackbar';
import {prepareAlertDetails} from '../Alert/Alert.helpers';
import {useDeleteLoan} from '../../../hooks/api/loan/useDeleteLoan';

export const LoanConfirm: React.FC<any> = ({loanDetails}) => {
    const history = useHistory();
    const {
        isFetchingConfirmCreateLoan,
        isErrorConfirmCreateLoan,
        setIsErrorConfirmCreateLoan,
        fetchConfirmCreateLoan,
        isResponseConfirmCreateLoan,
        setIsResponseConfirmCreateLoan,
    } = useGetConfirmCreateLoan();
    const {isFetchingDelete, isErrorDelete, setIsErrorDelete, isResponseDelete, setIsResponseDelete, fetchDeleteLoan} = useDeleteLoan();

    function handleConfirmCreateLoan() {
        fetchConfirmCreateLoan(loanDetails?.id);
        history.push(ROUTES.BORROWER_COMMITMENTS_LOANS);
    }
    function handleDeleteLoan() {
        fetchDeleteLoan(loanDetails?.id);
    }

    let alertDetails: any = {};
    if (isErrorConfirmCreateLoan) {
        alertDetails = prepareAlertDetails(setIsErrorConfirmCreateLoan);
    } else if (isResponseConfirmCreateLoan) {
        alertDetails = prepareAlertDetails(setIsResponseConfirmCreateLoan, 'success', 'Your offer was saved');
    } else if (isErrorDelete) {
        alertDetails = prepareAlertDetails(setIsErrorDelete, 'error', 'Your unconfirmed loan was not deleted');
    } else if (isResponseDelete) {
        alertDetails = prepareAlertDetails(setIsResponseDelete, 'success', 'Your unconfirmed loan was deleted');
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
                    <Button onClick={handleDeleteLoan} variant="outlined">
                        Delete
                    </Button>
                    <Button onClick={handleConfirmCreateLoan} variant="outlined">
                        Confirm
                    </Button>
                </FormikWrapper>
            )}
            {alertDetails.alertType && (
                <AlertSnackBar
                    alertType={alertDetails.alertType}
                    alertText={alertDetails.alertText}
                    handleCloseAlert={alertDetails.handleCloseAlert}
                ></AlertSnackBar>
            )}
        </>
    );
};

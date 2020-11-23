import React from 'react';
import {CircularProgress, Snackbar} from '@material-ui/core';
import {PaymentFormOnUserAccount} from '../PaymentForm/PaymentFormOnUserAccount';
import {PaymentFormOnPlatformAccount} from '../PaymentForm/PaymentFormOnPlatformAccount';
import {StyledCard, TextBold} from './PaymentCard.styles';
import {usePaymentOnPlatformAccount} from '../../../hooks/usePaymentOnPlatformAccount';
import {usePaymentOnUserAccount} from '../../../hooks/usePaymentOnUserAccount';
import {Alert} from '../Alert/Alert';

export const PaymentCard: React.FC<any> = ({accountBalance, currentPage}) => {
    const {
        isFetchingPaymentOnPlatform,
        isErrorPaymentOnPlatform,
        fetchPaymentOnPlatformAccount,
        responsePaymentOnPlatform,
    } = usePaymentOnPlatformAccount();
    const {
        isFetchingPaymentOnUserAccount,
        isErrorPaymentOnUserAccount,
        fetchPaymentOnUserAccount,
        responsePaymentOnUserAccount,
    } = usePaymentOnUserAccount();

    let openSuccess = false;
    let openError = false;

    if (isFetchingPaymentOnPlatform || isFetchingPaymentOnUserAccount) {
        return <CircularProgress />;
    }
    if (isErrorPaymentOnPlatform || isErrorPaymentOnUserAccount) {
        openError = true;
        openSuccess = false;
        console.log(openError, 'openError2');
        console.log(openSuccess, 'openSuccess2');
    }
    if (responsePaymentOnUserAccount || responsePaymentOnPlatform) {
        openError = false;
        openSuccess = true;
        console.log(openError, 'openError3');
        console.log(openSuccess, 'openSuccess3');
    }
    console.log(openError, 'openError1');
    console.log(openSuccess, 'openSuccess1');

    return (
        <StyledCard>
            <TextBold>Your platform account balance: {accountBalance} zł</TextBold>
            <PaymentFormOnPlatformAccount currentPage={currentPage} fetchPaymentOnPlatformAccount={fetchPaymentOnPlatformAccount} />
            <PaymentFormOnUserAccount currentPage={currentPage} fetchPaymentOnUserAccount={fetchPaymentOnUserAccount} />
            <Snackbar open={openSuccess} autoHideDuration={4000}>
                <Alert severity="success">'Your payment was successfull!'</Alert>
            </Snackbar>
            <Snackbar open={openError} autoHideDuration={4000}>
                <Alert severity="error">'Something went wrong with your payment. Please try again.'</Alert>
            </Snackbar>
        </StyledCard>
    );
};

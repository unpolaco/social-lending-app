import React from 'react';
import {CircularProgress, Snackbar} from '@material-ui/core';
import {PaymentFormOnUserAccount} from '../PaymentForm/PaymentFormOnUserAccount';
import {PaymentFormOnPlatformAccount} from '../PaymentForm/PaymentFormOnPlatformAccount';
import {StyledCard, TextBold} from './PaymentCard.styles';
import {usePaymentOnPlatformAccount} from '../../../hooks/api/payment/usePaymentOnPlatformAccount';
import {usePaymentOnUserAccount} from '../../../hooks/api/payment/usePaymentOnUserAccount';
import {AlertSnackBar} from '../Alert/AlertSnackbar';
import {prepareAlertDetails} from '../Alert/Alert.helpers';

export const PaymentCard: React.FC<any> = ({currentPage, fetchAccountDetails, accountDetails}) => {
    const {
        isFetchingPaymentOnPlatform,
        isErrorPaymentOnPlatform,
        fetchPaymentOnPlatformAccount,
        isResponsePaymentOnPlatform,
        setIsErrorPaymentOnPlatform,
        setIsResponsePaymentOnPlatform,
    } = usePaymentOnPlatformAccount();
    const {
        isFetchingPaymentOnUserAccount,
        isErrorPaymentOnUserAccount,
        fetchPaymentOnUserAccount,
        isResponsePaymentOnUserAccount,
        setIsErrorPaymentOnUserAccount,
        setIsResponsePaymentOnUserAccount,
    } = usePaymentOnUserAccount();

    let alertDetails: any = {};
    if (isErrorPaymentOnPlatform) {
        alertDetails = prepareAlertDetails(setIsErrorPaymentOnPlatform, 'error', isErrorPaymentOnPlatform);
    } else if (isResponsePaymentOnPlatform) {
        alertDetails = prepareAlertDetails(setIsResponsePaymentOnPlatform, 'success', 'Transaction was successful');
    } else if (isErrorPaymentOnUserAccount) {
        alertDetails = prepareAlertDetails(setIsErrorPaymentOnUserAccount, 'error', isErrorPaymentOnUserAccount);
    } else if (isResponsePaymentOnUserAccount) {
        alertDetails = prepareAlertDetails(setIsResponsePaymentOnUserAccount, 'success', 'Transaction was successful');
    }

    return (
        <StyledCard>
            <TextBold>Your platform account balance: {accountDetails?.accountBalance} zł</TextBold>
            <PaymentFormOnPlatformAccount
                currentPage={currentPage}
                fetchAccountDetails={fetchAccountDetails}
                fetchPaymentOnPlatformAccount={fetchPaymentOnPlatformAccount}
            />
            <PaymentFormOnUserAccount
                currentPage={currentPage}
                fetchAccountDetails={fetchAccountDetails}
                fetchPaymentOnUserAccount={fetchPaymentOnUserAccount}
            />
            {alertDetails.alertType && (
                <AlertSnackBar
                    alertType={alertDetails.alertType}
                    alertText={alertDetails.alertText}
                    handleCloseAlert={alertDetails.handleCloseAlert}
                ></AlertSnackBar>
            )}
        </StyledCard>
    );
};

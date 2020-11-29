import React from 'react';
import {PaymentFormOnUserAccount} from '../PaymentForm/PaymentFormOnUserAccount';
import {PaymentFormOnPlatformAccount} from '../PaymentForm/PaymentFormOnPlatformAccount';
import {StyledCard, TextBold, Text, Wrapper, Title} from './PaymentCard.styles';
import {usePaymentOnPlatformAccount} from '../../../hooks/api/payment/usePaymentOnPlatformAccount';
import {usePaymentOnUserAccount} from '../../../hooks/api/payment/usePaymentOnUserAccount';
import {AlertSnackBar} from '../Alert/AlertSnackbar';
import {prepareAlertDetails} from '../Alert/Alert.helpers';
import {AlertTypeProps} from '../Alert/Alert.types';

export const PaymentCard: React.FC<any> = ({currentPage, fetchAccountDetails, accountDetails}) => {
    const {
        isErrorPaymentOnPlatform,
        fetchPaymentOnPlatformAccount,
        isResponsePaymentOnPlatform,
        setIsErrorPaymentOnPlatform,
        setIsResponsePaymentOnPlatform,
    } = usePaymentOnPlatformAccount();
    const {
        isErrorPaymentOnUserAccount,
        fetchPaymentOnUserAccount,
        isResponsePaymentOnUserAccount,
        setIsErrorPaymentOnUserAccount,
        setIsResponsePaymentOnUserAccount,
    } = usePaymentOnUserAccount();

    let alertDetails: AlertTypeProps = {};
    if (isErrorPaymentOnPlatform) {
        alertDetails = prepareAlertDetails(setIsErrorPaymentOnPlatform, 'error', isErrorPaymentOnPlatform.toString());
    } else if (isResponsePaymentOnPlatform) {
        alertDetails = prepareAlertDetails(setIsResponsePaymentOnPlatform, 'success', 'Transaction was successful');
    } else if (isErrorPaymentOnUserAccount) {
        alertDetails = prepareAlertDetails(setIsErrorPaymentOnUserAccount, 'error', isErrorPaymentOnUserAccount.toString());
    } else if (isResponsePaymentOnUserAccount) {
        alertDetails = prepareAlertDetails(setIsResponsePaymentOnUserAccount, 'success', 'Transaction was successful');
    }

    return (
        <StyledCard>
            <Title>Your platform bank account </Title>
            <Wrapper>
                <Text>Your platform account balance: </Text>
                <TextBold>{accountDetails?.accountBalance} zł</TextBold>
            </Wrapper>
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

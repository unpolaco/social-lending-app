import React, {useEffect} from 'react';
import {CircularProgress, Snackbar} from '@material-ui/core';
import {PaymentFormOnUserAccount} from '../PaymentForm/PaymentFormOnUserAccount';
import {PaymentFormOnPlatformAccount} from '../PaymentForm/PaymentFormOnPlatformAccount';
import {StyledCard, TextBold} from './PaymentCard.styles';
import {usePaymentOnPlatformAccount} from '../../../hooks/usePaymentOnPlatformAccount';
import {usePaymentOnUserAccount} from '../../../hooks/usePaymentOnUserAccount';
import {Alert} from '../Alert/Alert';
import {useGetAccountDetails} from '../../../hooks/useGetAccountDetails';

export const PaymentCard: React.FC<any> = ({currentPage}) => {
    const userName = currentPage === 'lender' ? 'Samwise_Gamgee' : 'Bilbo_Baggins';
    const {
        isFetchingPaymentOnPlatform,
        isErrorPaymentOnPlatform,
        fetchPaymentOnPlatformAccount,
        responsePaymentOnPlatform,
        setIsErrorPaymentOnPlatform,
        setResponsePaymentOnPlatform,
    } = usePaymentOnPlatformAccount();
    const {
        isFetchingPaymentOnUserAccount,
        isErrorPaymentOnUserAccount,
        fetchPaymentOnUserAccount,
        responsePaymentOnUserAccount,
        setIsErrorPaymentOnUserAccount,
        setResponsePaymentOnUserAccount,
    } = usePaymentOnUserAccount();

    const {isFetchingGet, isErrorGet, fetchAccountDetails, accountDetails} = useGetAccountDetails();

    useEffect(() => {
        fetchAccountDetails(userName);
    }, [fetchAccountDetails]);

    if (isFetchingGet) {
        return <CircularProgress />;
    }
    if (isErrorGet) {
        alert('Error');
    }

    if (isFetchingPaymentOnPlatform || isFetchingPaymentOnUserAccount) {
        return <CircularProgress />;
    }
    const handleCloseErrorAlert = () => {
        setIsErrorPaymentOnUserAccount(false);
        setIsErrorPaymentOnPlatform(false);
    };
    const handleCloseSuccessAlert = () => {
        setResponsePaymentOnPlatform(false);
        setResponsePaymentOnUserAccount(false);
    };

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
            <Snackbar
                open={responsePaymentOnUserAccount || responsePaymentOnPlatform}
                autoHideDuration={3000}
                onClose={handleCloseSuccessAlert}
                onClick={handleCloseSuccessAlert}
            >
                <Alert severity="success">'Your payment was successfull!'</Alert>
            </Snackbar>
            <Snackbar
                open={isErrorPaymentOnPlatform || isErrorPaymentOnUserAccount}
                autoHideDuration={3000}
                onClose={handleCloseErrorAlert}
                onClick={handleCloseErrorAlert}
            >
                <Alert severity="error">'Error payment. Please try again.'</Alert>
            </Snackbar>
        </StyledCard>
    );
};

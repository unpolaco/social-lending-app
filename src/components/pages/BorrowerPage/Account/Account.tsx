import React, {useEffect} from 'react';
import {Card, CircularProgress, Typography} from '@material-ui/core/';
import {useGetAccountDetails} from '../../../../hooks/useGetAccountDetails';
import {TextBold, TextLight} from '../../../shared/TableCollapseBox/CollapseBox.styles';
import {PaymentForm} from '../../../shared/PaymentForm/PaymentForm';

export const Account: React.FC = () => {
    const {isFetchingGet, isErrorGet, fetchAccountDetails, accountDetails} = useGetAccountDetails();

    useEffect(() => {
        fetchAccountDetails('Bilbo_Baggins');
    }, [fetchAccountDetails]);

    if (isFetchingGet) {
        return <CircularProgress />;
    }
    if (isErrorGet) {
        alert('Error');
    }

    return (
        <>
            <Typography>BORROWER ACCOUNT Page</Typography>
            {accountDetails && (
                <div>
                    <TextLight>Username</TextLight>
                    <TextBold>{accountDetails.userName}</TextBold>
                    <TextLight>First name</TextLight>
                    <TextBold>{accountDetails.name}</TextBold>
                    <TextLight>Surname</TextLight>
                    <TextBold>{accountDetails.surname}</TextBold>
                    <TextLight>E-mail</TextLight>
                    <TextBold>{accountDetails.email}</TextBold>
                    <TextLight>Phone number</TextLight>
                    <TextBold>{accountDetails.phoneNumber}</TextBold>
                    <TextLight>hasLinkedBankAccount</TextLight>
                    <TextBold>{accountDetails.hasLinkedBankAccount}</TextBold>
                </div>
            )}
            <Card>
                <PaymentForm paymentType="paymentOnPlatform" accountBalance={accountDetails?.accountBalance} />
                <PaymentForm paymentType="paymentOnUserAccount" accountBalance={accountDetails?.accountBalance} />
            </Card>
        </>
    );
};

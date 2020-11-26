import React, {useEffect} from 'react';
import {CircularProgress} from '@material-ui/core/';
import {useGetAccountDetails} from '../../../../hooks/api/account/useGetAccountDetails';
import {StyledCard, PageWrapper, TextBold, TextLight, Title} from './Account.styles';
import {PaymentCard} from '../../../shared/PaymentCard/PaymentCard';

export const Account: React.FC = () => {
    const {isFetchingGet, isErrorGet, fetchAccountDetails, accountDetails} = useGetAccountDetails();

    useEffect(() => {
        fetchAccountDetails('Samwise_Gamgee');
    }, [fetchAccountDetails]);

    if (isFetchingGet) {
        return <CircularProgress />;
    }
    if (isErrorGet) {
        alert('Error');
    }

    return (
        <>
            <Title>LENDER ACCOUNT Page</Title>
            <PageWrapper>
                {accountDetails && (
                    <StyledCard>
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
                    </StyledCard>
                )}
                <PaymentCard currentPage="lender" />
            </PageWrapper>
        </>
    );
};

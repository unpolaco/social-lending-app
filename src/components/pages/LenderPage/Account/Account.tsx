import React, {useEffect} from 'react';
import {CircularProgress} from '@material-ui/core/';
import {useGetAccountDetails} from '../../../../hooks/api/account/useGetAccountDetails';
import {PageWrapper, Title} from './Account.styles';
import {PaymentCard} from '../../../shared/PaymentCard/PaymentCard';
import {PrivateProfile} from '../../../shared/PrivateProfile/PrivateProfile';

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
                {accountDetails && <PrivateProfile accountDetails={accountDetails} />}
                <PaymentCard currentPage="lender" />
            </PageWrapper>
        </>
    );
};

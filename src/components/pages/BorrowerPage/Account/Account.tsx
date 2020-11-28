import React, {useEffect} from 'react';
import {CircularProgress} from '@material-ui/core/';
import {useGetAccountPrivateProfile} from '../../../../hooks/api/account/useGetAccountPrivateProfile';
import {PageWrapper, Title} from './Account.styles';
import {PaymentCard} from '../../../shared/PaymentCard/PaymentCard';
import {PrivateProfile} from '../../../shared/PrivateProfile/PrivateProfile';
import {AlertSnackBar} from '../../../shared/Alert/AlertSnackbar';
import {prepareAlertDetails} from '../../../shared/Alert/Alert.helpers';

export const Account: React.FC = () => {
    const {isErrorGet, setIsErrorGet, fetchAccountDetails, accountDetails} = useGetAccountPrivateProfile();

    useEffect(() => {
        fetchAccountDetails('Bilbo_Baggins');
    }, [fetchAccountDetails]);

    const alertDetails = isErrorGet && prepareAlertDetails(setIsErrorGet);

    return (
        <>
            <Title>BORROWER ACCOUNT Page</Title>
            <PageWrapper>
                {accountDetails && <PrivateProfile accountDetails={accountDetails} />}
                <PaymentCard currentPage="borrower" fetchAccountDetails={fetchAccountDetails} accountDetails={accountDetails} />
            </PageWrapper>
            {alertDetails.alertType && (
                <AlertSnackBar
                    alertType={alertDetails.alertType}
                    alertText={alertDetails.alertText}
                    handleCloseAlert={alertDetails.handleCloseAlert}
                />
            )}
        </>
    );
};

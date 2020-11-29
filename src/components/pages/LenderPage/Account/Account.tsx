import React, {useEffect} from 'react';
import {CircularProgress} from '@material-ui/core/';
import {useGetAccountPrivateProfile} from '../../../../hooks/api/account/useGetAccountPrivateProfile';
import {PageWrapper, Title} from './Account.styles';
import {PaymentCard} from '../../../shared/PaymentCard/PaymentCard';
import {PrivateProfile} from '../../../shared/PrivateProfile/PrivateProfile';
import {AlertSnackBar} from '../../../shared/Alert/AlertSnackbar';
import {prepareAlertDetails} from '../../../shared/Alert/Alert.helpers';
import {AlertTypeProps} from '../../../shared/Alert/Alert.types';

export const Account: React.FC = () => {
    const {isErrorGet, isFetchingGet, setIsErrorGet, fetchAccountDetails, accountDetails} = useGetAccountPrivateProfile();

    useEffect(() => {
        fetchAccountDetails('Samwise_Gamgee');
    }, [fetchAccountDetails]);

    let alertDetails: AlertTypeProps = isErrorGet && prepareAlertDetails(setIsErrorGet);

    return (
        <>
            <Title>LENDER ACCOUNT Page</Title>
            <PageWrapper>
                {isFetchingGet ? <CircularProgress /> : accountDetails && <PrivateProfile accountDetails={accountDetails} />}
                <PaymentCard currentPage="lender" fetchAccountDetails={fetchAccountDetails} accountDetails={accountDetails} />
                {alertDetails.alertType && (
                    <AlertSnackBar
                        alertType={alertDetails.alertType}
                        alertText={alertDetails.alertText}
                        handleCloseAlert={alertDetails.handleCloseAlert}
                    />
                )}
            </PageWrapper>
        </>
    );
};

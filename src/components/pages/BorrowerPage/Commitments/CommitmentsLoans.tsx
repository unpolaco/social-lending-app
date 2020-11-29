import React, {useEffect} from 'react';
import {useGetUserLoans} from '../../../../hooks/api/loan/useGetUserLoans';
import {Table} from '../../../shared/Table/Table';
import {CircularProgress} from '@material-ui/core/';
import {PageWrapper, Title} from './Commitments.styles';
import {AlertSnackBar} from '../../../shared/Alert/AlertSnackbar';
import {prepareAlertDetails} from '../../../shared/Alert/Alert.helpers';

export const CommitmentsLoans: React.FC = () => {
    const {isFetchingGet, isErrorGet, setIsErrorGet, fetchUserLoans, userLoansList} = useGetUserLoans();

    useEffect(() => {
        fetchUserLoans('Bilbo_Baggins');
    }, [fetchUserLoans]);

    let alertDetails = isErrorGet && prepareAlertDetails(setIsErrorGet);

    return (
        <PageWrapper>
            <Title>Your Loans</Title>
            {isFetchingGet ? (
                <CircularProgress />
            ) : (
                userLoansList && <Table rows={userLoansList} currentPage="borrowerUserLoans" fetchUserLoans={fetchUserLoans} />
            )}
            {alertDetails.alertType && (
                <AlertSnackBar
                    alertType={alertDetails.alertType}
                    alertText={alertDetails.alertText}
                    handleCloseAlert={alertDetails.handleCloseAlert}
                />
            )}
        </PageWrapper>
    );
};

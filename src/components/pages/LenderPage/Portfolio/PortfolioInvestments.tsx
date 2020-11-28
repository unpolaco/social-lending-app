import React, {useEffect} from 'react';
import {useGetUserInvestments} from '../../../../hooks/api/investment/useGetUserInvestments';
import {Table} from '../../../shared/Table/Table';
import {CircularProgress} from '@material-ui/core/';
import {PageWrapper, Title} from './Portfolio.styles';
import {prepareAlertDetails} from '../../../shared/Alert/Alert.helpers';
import {AlertSnackBar} from '../../../shared/Alert/AlertSnackbar';

export const PortfolioInvestments: React.FC = () => {
    const {isFetchingGet, isErrorGet, setIsErrorGet, fetchUserInvestments, userInvestmentsList} = useGetUserInvestments();

    useEffect(() => {
        fetchUserInvestments('Samwise_Gamgee');
    }, [fetchUserInvestments]);

    let alertDetails = isErrorGet && prepareAlertDetails(setIsErrorGet);

    return (
        <PageWrapper>
            <Title>Your Investments</Title>
            {userInvestmentsList && <Table rows={userInvestmentsList} currentPage="lenderUserInvestments" />}
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

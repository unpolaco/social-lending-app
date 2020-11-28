import React, {useEffect} from 'react';
import {useGetUserOffers} from '../../../../hooks/api/offer/useGetUserOffers';
import {Table} from '../../../shared/Table/Table';
import {CircularProgress} from '@material-ui/core/';
import {PageWrapper, Title} from './Portfolio.styles';
import {prepareAlertDetails} from '../../../shared/Alert/Alert.helpers';
import {AlertSnackBar} from '../../../shared/Alert/AlertSnackbar';

export const PortfolioOffers: React.FC = () => {
    const {isFetchingGet, isErrorGet, setIsErrorGet, fetchUserOffers, userOffersList} = useGetUserOffers();

    useEffect(() => {
        fetchUserOffers('Samwise_Gamgee');
    }, [fetchUserOffers]);

    let alertDetails = isErrorGet && prepareAlertDetails(setIsErrorGet);

    return (
        <PageWrapper>
            <Title>Your Offers</Title>
            {userOffersList && <Table rows={userOffersList} currentPage="lenderUserOffers" fetchUserOffers={fetchUserOffers} />}
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

import React, {useEffect} from 'react';
import {CircularProgress} from '@material-ui/core/';
import {Table} from '../../../shared/Table/Table';
import {useGetAllAuctions} from '../../../../hooks/api/auction/useGetAllAuctions';
import {PageWrapper, Title} from './Auctions.styles';
import {AlertSnackBar} from '../../../shared/Alert/AlertSnackbar';
import {prepareAlertDetails} from '../../../shared/Alert/Alert.helpers';
import {AlertTypeProps} from '../../../shared/Alert/Alert.types';

export const Auctions: React.FC = () => {
    const {isFetchingGet, isErrorGet, setIsErrorGet, fetchAllAuctions, auctionsList} = useGetAllAuctions();

    useEffect(() => {
        fetchAllAuctions();
    }, [fetchAllAuctions]);

    let alertDetails: AlertTypeProps = isErrorGet && prepareAlertDetails(setIsErrorGet);

    return (
        <PageWrapper>
            <Title>List of all actual auctions:</Title>
            {isFetchingGet ? <CircularProgress /> : auctionsList && <Table rows={auctionsList} currentPage="borrowerAllAuctions" />}
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

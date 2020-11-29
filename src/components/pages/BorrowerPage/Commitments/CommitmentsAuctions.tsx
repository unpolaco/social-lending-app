import React, {useEffect} from 'react';
import {useGetUserAuctions} from '../../../../hooks/api/auction/useGetUserAuctions';
import {Table} from '../../../shared/Table/Table';
import {CircularProgress} from '@material-ui/core/';
import {AuctionCreateForm} from '../../../shared/AuctionCreateForm/AuctionCreateForm';
import {AuctionCreateFormValues} from '../../../shared/AuctionCreateForm/AuctionCreateForm.types';
import {useSaveNewAuction} from '../../../../hooks/api/auction/useSaveNewAuction';
import {PageWrapper, Title} from './Commitments.styles';
import {AlertSnackBar} from '../../../shared/Alert/AlertSnackbar';
import {prepareAlertDetails} from '../../../shared/Alert/Alert.helpers';
import {AlertTypeProps} from '../../../shared/Alert/Alert.types';

export const CommitmentsAuctions: React.FC = () => {
    const {isFetchingGet, isErrorGet, setIsErrorGet, fetchUserAuctions, userAuctionsList} = useGetUserAuctions();
    const {isFetchingSave, isErrorSave, setIsErrorSave, isSaveResponse, setIsSaveResponse, fetchNewAuction} = useSaveNewAuction();

    useEffect(() => {
        fetchUserAuctions('Bilbo_Baggins');
    }, [fetchUserAuctions]);

    async function handleSaveNewAuction(newAuctionData: AuctionCreateFormValues) {
        newAuctionData.borrower = 'Bilbo_Baggins';
        await fetchNewAuction(newAuctionData);
        fetchUserAuctions('Bilbo_Baggins');
    }

    let alertDetails: AlertTypeProps = {};
    if (isErrorGet) {
        alertDetails = prepareAlertDetails(setIsErrorGet);
    } else if (isErrorSave) {
        alertDetails = prepareAlertDetails(setIsErrorSave, 'error', 'Your auction was not saved');
    } else if (isSaveResponse) {
        alertDetails = prepareAlertDetails(setIsSaveResponse, 'success', 'Your auction was saved');
    }

    return (
        <PageWrapper>
            <AuctionCreateForm handleSaveNewAuction={handleSaveNewAuction} />
            <Title>Your Auctions</Title>
            {isFetchingGet || isFetchingSave ? (
                <CircularProgress />
            ) : (
                userAuctionsList && (
                    <Table rows={userAuctionsList} currentPage="borrowerUserAuctions" fetchUserAuctions={fetchUserAuctions} />
                )
            )}
            {alertDetails.alertType && (
                <AlertSnackBar
                    alertType={alertDetails.alertType}
                    alertText={alertDetails.alertText}
                    handleCloseAlert={alertDetails.handleCloseAlert}
                ></AlertSnackBar>
            )}
        </PageWrapper>
    );
};

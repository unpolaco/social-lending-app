import React, {useEffect} from 'react';
import {CircularProgress} from '@material-ui/core/';
import {useGetAllAuctions} from '../../../../hooks/api/auction/useGetAllAuctions';
import {useSaveNewOffer} from '../../../../hooks/api/offer/useSaveNewOffer';
import {Table} from '../../../shared/Table/Table';
import {PageWrapper, Title} from './Invest.styles';
import {NewOfferForm} from '../../../../api/api.types';
import {AlertSnackBar} from '../../../shared/Alert/AlertSnackbar';
import {prepareAlertDetails} from '../../../shared/Alert/Alert.helpers';

export const Invest: React.FC = () => {
    const {isFetchingGet, isErrorGet, setIsErrorGet, fetchAllAuctions, auctionsList} = useGetAllAuctions();
    const {isFetchingSave, isErrorSave, setIsErrorSave, fetchNewOffer, setIsSaveResponse, isSaveResponse} = useSaveNewOffer();

    useEffect(() => {
        fetchAllAuctions();
    }, [fetchAllAuctions]);

    async function handleSaveNewOffer(newOfferData: NewOfferForm) {
        newOfferData.lenderUserName = 'Samwise_Gamgee';
        await fetchNewOffer(newOfferData);
        fetchAllAuctions();
    }

    let alertDetails: any = {};
    if (isErrorGet) {
        alertDetails = prepareAlertDetails(setIsErrorGet);
    } else if (isErrorSave) {
        alertDetails = prepareAlertDetails(setIsErrorSave, 'error', 'Your offer was not saved');
    } else if (isSaveResponse) {
        alertDetails = prepareAlertDetails(setIsSaveResponse, 'success', 'Your offer was saved');
    }

    return (
        <PageWrapper>
            <Title>List of all actual auctions:</Title>
            {isFetchingGet || isFetchingSave ? (
                <CircularProgress />
            ) : (
                auctionsList && <Table rows={auctionsList} currentPage="lenderAllAuctions" handleSaveNewOffer={handleSaveNewOffer} />
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

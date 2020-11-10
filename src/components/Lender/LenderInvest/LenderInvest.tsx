import React, {useEffect} from 'react';
import {Paper, Typography, CircularProgress} from '@material-ui/core/';
import {useGetAllAuctions} from '../../../hooks/useGetAllAuctions';
import {useSaveNewOffer} from '../../../hooks/useSaveNewOffer';
import {AuctionTable} from '../../shared/AuctionTable/AuctionTable';

export const LenderInvest = () => {
    const {isFetchingGet, isErrorGet, fetchAllAuctions, auctionsList} = useGetAllAuctions();
    const {isFetchingSave, isErrorSave, fetchNewOffer} = useSaveNewOffer();

    useEffect(() => {
        fetchAllAuctions();
    }, [fetchAllAuctions]);

    if (isFetchingGet || isFetchingSave) {
        return <CircularProgress />;
    }
    if (isErrorGet || isErrorSave) {
        alert('Error');
    }

    function handleSaveNewOffer(newOfferData: any) {
        newOfferData.lenderUserName = 'testLender';
        fetchNewOffer(newOfferData);
        fetchAllAuctions();
    }

    return (
        <Paper>
            <Typography>List of all actual auctions:</Typography>
            {auctionsList && <AuctionTable auctionsList={auctionsList} lender handleSaveNewOffer={handleSaveNewOffer} />}
        </Paper>
    );
};

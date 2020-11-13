import React, {useEffect} from 'react';
import {Typography, CircularProgress} from '@material-ui/core/';
import {useGetAllAuctions} from '../../../hooks/useGetAllAuctions';
import {useSaveNewOffer} from '../../../hooks/useSaveNewOffer';
import {Table} from '../../shared/Table/Table';

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
        <>
            <Typography>List of all actual auctions:</Typography>
            {auctionsList && <Table rows={auctionsList} currentPage="lenderAllAuctions" handleSaveNewOffer={handleSaveNewOffer} />}
        </>
    );
};

import React, {useEffect} from 'react';
import {Paper, Typography, CircularProgress} from '@material-ui/core/';
import {useGetAllAuctions} from '../../../hooks/useGetAllAuctions';
import {AuctionTable} from '../../shared/AuctionTable/AuctionTable';

export const LenderInvest = () => {
    const {isFetchingGet, isErrorGet, fetchAllAuctions, auctionsList} = useGetAllAuctions();

    useEffect(() => {
        fetchAllAuctions();
    }, [fetchAllAuctions]);

    if (isFetchingGet) {
        return <CircularProgress />;
    }
    if (isErrorGet) {
        alert('Error');
    }

    return (
        <Paper>
            <Typography>List of all actual auctions:</Typography>
            {auctionsList && <AuctionTable auctionsList={auctionsList} lender />}
        </Paper>
    );
};

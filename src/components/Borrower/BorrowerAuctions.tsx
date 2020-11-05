import React from 'react';
import {Typography} from '@material-ui/core/';
import {AuctionCard} from './AuctionCard';
import {BorrowerAuctionsCreateForm} from './BorrowerAuctionsCreateForm';
export const BorrowerAuctions = () => {
    return (
        <>
            <Typography>List of all actual auctions:</Typography>
            <AuctionCard />
            <BorrowerAuctionsCreateForm />
        </>
    );
};

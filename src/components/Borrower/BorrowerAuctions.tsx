import React from 'react';
import {Typography} from '@material-ui/core/';
import {AuctionCard} from './AuctionCard';

export const BorrowerAuctions = () => {
    return (
        <>
            <Typography>List of all actual auctions:</Typography>
            <AuctionCard />
        </>
    );
};

import React from 'react';
import {Container, Typography} from '@material-ui/core/';
import {AuctionCard} from './AuctionCard';
import {BorrowerAuctionsCreateForm} from './BorrowerAuctionsCreateForm';
export const BorrowerAuctions = () => {
    return (
        <Container>
            <Typography>List of all actual auctions:</Typography>
            <BorrowerAuctionsCreateForm />
            <AuctionCard />
        </Container>
    );
};

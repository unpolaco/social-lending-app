import React, {useEffect} from 'react';
import {Container, Typography, CircularProgress} from '@material-ui/core/';
import {AuctionCard} from './AuctionCard';
import {BorrowerAuctionsCreateForm} from './BorrowerAuctionsCreateForm/BorrowerAuctionsCreateForm';
import {useGetAllAuctions} from '../../../hooks/useGetAllAuctions';
export const BorrowerAuctions = () => {
    const {isFetching, isError, fetchAllAuctions, auctionsList} = useGetAllAuctions();

    useEffect(() => {
        fetchAllAuctions();
    }, [fetchAllAuctions]);

    if (isFetching) {
        return <CircularProgress />;
    }
    if (isError) {
        alert('Error');
    }

    return (
        <Container>
            <Typography>List of all actual auctions:</Typography>
            <BorrowerAuctionsCreateForm />
            {auctionsList?.map((auction: any) => (
                <AuctionCard key={auction.id} auction={auction} />
            ))}
        </Container>
    );
};

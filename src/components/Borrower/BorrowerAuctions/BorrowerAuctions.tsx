import React, {useEffect} from 'react';
import {Container, Typography, CircularProgress} from '@material-ui/core/';
import {AuctionCard} from './AuctionCard';
import {BorrowerAuctionsCreateForm} from './BorrowerAuctionsCreateForm/BorrowerAuctionsCreateForm';
import {useGetAllAuctions} from '../../../hooks/useGetAllAuctions';
import {useSaveNewAuction} from '../../../hooks/useSaveNewAuction';
import {AuctionProps} from './BorrowerAuctions.types';

export const BorrowerAuctions = () => {
    const {isFetchingGet, isErrorGet, fetchAllAuctions, auctionsList} = useGetAllAuctions();
    const {isFetchingSave, isErrorSave, fetchNewAuction} = useSaveNewAuction();

    useEffect(() => {
        fetchAllAuctions();
    }, [fetchAllAuctions]);

    if (isFetchingGet || isFetchingSave) {
        return <CircularProgress />;
    }
    if (isErrorGet || isErrorSave) {
        alert('Error');
    }

    function handleSaveNewAuction(newAuctionData: any) {
        newAuctionData.borrower = 'testBorrower';
        fetchNewAuction(newAuctionData);
        fetchAllAuctions();
    }

    return (
        <Container>
            <Typography>List of all actual auctions:</Typography>
            <BorrowerAuctionsCreateForm handleSaveNewAuction={handleSaveNewAuction} />
            {auctionsList?.map((auction: AuctionProps) => (
                <AuctionCard key={auction.id} auction={auction} />
            ))}
        </Container>
    );
};

import React, {useEffect} from 'react';
import {Container, Typography, CircularProgress} from '@material-ui/core/';
import {AuctionTable} from '../../shared/AuctionTable/AuctionTable';
import {BorrowerAuctionsCreateForm} from './BorrowerAuctionsCreateForm/BorrowerAuctionsCreateForm';
import {useGetAllAuctions} from '../../../hooks/useGetAllAuctions';
import {useSaveNewAuction} from '../../../hooks/useSaveNewAuction';

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
            {auctionsList && <AuctionTable auctionsList={auctionsList} borrowerAllAuctions />}
        </Container>
    );
};

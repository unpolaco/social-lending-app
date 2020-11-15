import React, {useEffect} from 'react';
import {Container, Typography, CircularProgress} from '@material-ui/core/';
import {Table} from '../../shared/Table/Table';
import {useGetAllAuctions} from '../../../hooks/useGetAllAuctions';

export const BorrowerAuctions = () => {
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
        <Container>
            <Typography>List of all actual auctions:</Typography>
            {auctionsList && <Table rows={auctionsList} currentPage="borrowerAllAuctions" />}
        </Container>
    );
};

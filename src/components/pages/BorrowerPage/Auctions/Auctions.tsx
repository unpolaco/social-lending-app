import React, {useEffect} from 'react';
import {CircularProgress} from '@material-ui/core/';
import {Table} from '../../../shared/Table/Table';
import {useGetAllAuctions} from '../../../../hooks/useGetAllAuctions';
import {PageWrapper, Title} from './Auctions.styles';

export const Auctions: React.FC = () => {
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
        <PageWrapper>
            <Title>List of all actual auctions:</Title>
            {auctionsList && <Table rows={auctionsList} currentPage="borrowerAllAuctions" />}
        </PageWrapper>
    );
};

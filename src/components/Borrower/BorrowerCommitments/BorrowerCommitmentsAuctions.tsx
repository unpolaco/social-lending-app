import React, {useEffect} from 'react';
import {useGetUserAuctions} from '../../../hooks/useGetUserAuctions';
import {Table} from '../../shared/Table/Table';
import {CircularProgress} from '@material-ui/core/';

export const BorrowerCommitmentsAuctions: React.FC = () => {
    const {isFetchingGet, isErrorGet, fetchUserAuctions, userAuctionsList} = useGetUserAuctions();

    useEffect(() => {
        fetchUserAuctions('testBorrower1');
    }, [fetchUserAuctions]);

    if (isFetchingGet) {
        return <CircularProgress />;
    }
    if (isErrorGet) {
        alert('Error');
    }

    return (
        <>
            <div>Your Auctions</div>
            {userAuctionsList && <Table rows={userAuctionsList} currentPage="borrowerUserAuctions" />}
        </>
    );
};

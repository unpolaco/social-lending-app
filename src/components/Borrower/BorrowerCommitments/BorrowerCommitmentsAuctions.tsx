import React, {useEffect} from 'react';
import {useGetUserAuctions} from '../../../hooks/useGetUserAuctions';
import {AuctionTable} from '../../shared/Table/AuctionTable';
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
            {userAuctionsList && <AuctionTable auctionsList={userAuctionsList} borrowerUserAuctions />}
        </>
    );
};

import React, {useEffect} from 'react';
import {useGetUserAuctions} from '../../../hooks/useGetUserAuctions';
import {Table} from '../../shared/Table/Table';
import {CircularProgress} from '@material-ui/core/';
import {AuctionCreateForm} from '../../shared/AuctionCreateForm/AuctionCreateForm';
import {useSaveNewAuction} from '../../../hooks/useSaveNewAuction';

export const BorrowerCommitmentsAuctions: React.FC = () => {
    const {isFetchingGet, isErrorGet, fetchUserAuctions, userAuctionsList} = useGetUserAuctions();
    const {isFetchingSave, isErrorSave, fetchNewAuction} = useSaveNewAuction();
    const startAuctionDate: string = new Date().toISOString().slice(0, 10);

    useEffect(() => {
        fetchUserAuctions('Bilbo_Baggins');
    }, [fetchUserAuctions]);

    if (isFetchingGet || isFetchingSave) {
        return <CircularProgress />;
    }
    if (isErrorGet || isErrorSave) {
        alert('Error');
    }

    function handleSaveNewAuction(newAuctionData: any) {
        newAuctionData.borrower = 'Bilbo_Baggins';
        newAuctionData.startAuctionDate = startAuctionDate;
        fetchNewAuction(newAuctionData);
        fetchUserAuctions('Bilbo_Baggins');
    }

    return (
        <>
            <AuctionCreateForm handleSaveNewAuction={handleSaveNewAuction} />
            <div>Your Auctions</div>
            {userAuctionsList && <Table rows={userAuctionsList} currentPage="borrowerUserAuctions" />}
        </>
    );
};

import React, {useEffect} from 'react';
import {useGetUserAuctions} from '../../../../hooks/useGetUserAuctions';
import {Table} from '../../../shared/Table/Table';
import {CircularProgress} from '@material-ui/core/';
import {AuctionCreateForm} from '../../../shared/AuctionCreateForm/AuctionCreateForm';
import {useSaveNewAuction} from '../../../../hooks/useSaveNewAuction';
import {PageWrapper, Title} from './Commitments.styles';

export const CommitmentsAuctions: React.FC = () => {
    const {isFetchingGet, isErrorGet, fetchUserAuctions, userAuctionsList} = useGetUserAuctions();
    const {isFetchingSave, isErrorSave, fetchNewAuction} = useSaveNewAuction();

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
        fetchNewAuction(newAuctionData);
        fetchUserAuctions('Bilbo_Baggins');
    }

    return (
        <PageWrapper>
            <AuctionCreateForm handleSaveNewAuction={handleSaveNewAuction} />
            <Title>Your Auctions</Title>
            {userAuctionsList && <Table rows={userAuctionsList} currentPage="borrowerUserAuctions" />}
        </PageWrapper>
    );
};

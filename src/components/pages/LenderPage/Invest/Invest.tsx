import React, {useEffect} from 'react';
import {CircularProgress} from '@material-ui/core/';
import {useGetAllAuctions} from '../../../../hooks/useGetAllAuctions';
import {useSaveNewOffer} from '../../../../hooks/useSaveNewOffer';
import {Table} from '../../../shared/Table/Table';
import {PageWrapper, Title} from './Invest.styles';

export const Invest: React.FC = () => {
    const {isFetchingGet, isErrorGet, fetchAllAuctions, auctionsList} = useGetAllAuctions();
    const {isFetchingSave, isErrorSave, fetchNewOffer} = useSaveNewOffer();

    useEffect(() => {
        fetchAllAuctions();
    }, [fetchAllAuctions]);

    if (isFetchingGet || isFetchingSave) {
        return <CircularProgress />;
    }
    if (isErrorGet || isErrorSave) {
        alert('Error');
    }

    async function handleSaveNewOffer(newOfferData: any) {
        newOfferData.lenderUserName = 'Samwise_Gamgee';
        await fetchNewOffer(newOfferData);
        fetchAllAuctions();
    }

    return (
        <PageWrapper>
            <Title>List of all actual auctions:</Title>
            {auctionsList && <Table rows={auctionsList} currentPage="lenderAllAuctions" handleSaveNewOffer={handleSaveNewOffer} />}
        </PageWrapper>
    );
};

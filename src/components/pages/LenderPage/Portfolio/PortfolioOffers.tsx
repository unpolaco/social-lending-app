import React, {useEffect} from 'react';
import {useGetUserOffers} from '../../../../hooks/useGetUserOffers';
import {Table} from '../../../shared/Table/Table';
import {CircularProgress} from '@material-ui/core/';
import {PageWrapper, Title} from './Portfolio.styles';

export const PortfolioOffers: React.FC = () => {
    const {isFetchingGet, isErrorGet, fetchUserOffers, userOffersList} = useGetUserOffers();

    useEffect(() => {
        fetchUserOffers('Samwise_Gamgee');
    }, [fetchUserOffers]);

    if (isFetchingGet) {
        return <CircularProgress />;
    }
    if (isErrorGet) {
        alert('Error');
    }

    return (
        <PageWrapper>
            <Title>Your Offers</Title>
            {userOffersList && <Table rows={userOffersList} currentPage="lenderUserOffers" fetchUserOffers={fetchUserOffers} />}
        </PageWrapper>
    );
};

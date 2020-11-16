import React, {useEffect} from 'react';
import {useGetUserOffers} from '../../../../hooks/useGetUserOffers';
import {Table} from '../../../shared/Table/Table';
import {CircularProgress, Container} from '@material-ui/core/';

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
        <Container>
            <div>Your Offers</div>
            {userOffersList && <Table rows={userOffersList} currentPage="lenderUserOffers" />}
        </Container>
    );
};

import React, {useEffect} from 'react';
import {useGetUserInvestments} from '../../../hooks/useGetUserInvestments';
import {Table} from '../../shared/Table/Table';
import {CircularProgress, Container} from '@material-ui/core/';

export const LenderPortfolioInvestments: React.FC = () => {
    const {isFetchingGet, isErrorGet, fetchUserInvestments, userInvestmentsList} = useGetUserInvestments();

    useEffect(() => {
        fetchUserInvestments('Samwise_Gamgee');
    }, [fetchUserInvestments]);

    if (isFetchingGet) {
        return <CircularProgress />;
    }
    if (isErrorGet) {
        alert('Error');
    }

    return (
        <Container>
            <div>Your Investments</div>
            {userInvestmentsList && <Table rows={userInvestmentsList} currentPage="lenderUserInvestments" />}
        </Container>
    );
};

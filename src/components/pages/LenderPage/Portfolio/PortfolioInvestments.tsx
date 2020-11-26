import React, {useEffect} from 'react';
import {useGetUserInvestments} from '../../../../hooks/api/investment/useGetUserInvestments';
import {Table} from '../../../shared/Table/Table';
import {CircularProgress} from '@material-ui/core/';
import {PageWrapper, Title} from './Portfolio.styles';

export const PortfolioInvestments: React.FC = () => {
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
        <PageWrapper>
            <Title>Your Investments</Title>
            {userInvestmentsList && <Table rows={userInvestmentsList} currentPage="lenderUserInvestments" />}
        </PageWrapper>
    );
};

import React, {useEffect} from 'react';
import {useGetUserLoans} from '../../../../hooks/useGetUserLoans';
import {Table} from '../../../shared/Table/Table';
import {CircularProgress} from '@material-ui/core/';
import {PageWrapper, Title} from './Commitments.styles';

export const CommitmentsLoans: React.FC = () => {
    const {isFetchingGet, isErrorGet, fetchUserLoans, userLoansList} = useGetUserLoans();

    useEffect(() => {
        fetchUserLoans('Bilbo_Baggins');
    }, [fetchUserLoans]);

    if (isFetchingGet) {
        return <CircularProgress />;
    }
    if (isErrorGet) {
        alert('Error');
    }

    return (
        <PageWrapper>
            <Title>Your Loans</Title>
            {userLoansList && <Table rows={userLoansList} currentPage="borrowerUserLoans" />}
        </PageWrapper>
    );
};

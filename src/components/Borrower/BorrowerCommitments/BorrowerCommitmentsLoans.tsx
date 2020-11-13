import React, {useEffect} from 'react';
import {useGetUserLoans} from '../../../hooks/useGetUserLoans';
import {Table} from '../../shared/Table/Table';
import {CircularProgress} from '@material-ui/core/';

export const BorrowerCommitmentsLoans: React.FC = () => {
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
        <>
            <div>Your Loans</div>
            {userLoansList && <Table rows={userLoansList} currentPage="borrowerUserLoans" />}
        </>
    );
};

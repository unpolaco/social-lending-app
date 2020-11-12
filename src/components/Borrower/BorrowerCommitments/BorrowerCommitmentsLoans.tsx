import React, {useEffect} from 'react';
import {useGetUserLoans} from '../../../hooks/useGetUserLoans';
import {LoansTable} from '../../shared/Table/LoansTable';
import {CircularProgress} from '@material-ui/core/';

export const BorrowerCommitmentsLoans: React.FC = () => {
    const {isFetchingGet, isErrorGet, fetchUserLoans, userLoansList} = useGetUserLoans();

    useEffect(() => {
        fetchUserLoans('testBorrower1');
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
            {userLoansList && <LoansTable userLoansList={userLoansList} />}
        </>
    );
};

import {useCallback, useState} from 'react';
import {getUserLoans} from '../../../api/fetchLoan';
import {LoanDto} from '../../../api/api.types';

export const useGetUserLoans = () => {
    const [isFetchingGet, setIsFetchingGet] = useState<boolean>(false);
    const [isErrorGet, setIsErrorGet] = useState<boolean>(false);
    const [userLoansList, setUserLoansList] = useState<LoanDto>();

    const fetchUserLoans = useCallback(async (userId: string) => {
        setIsFetchingGet(true);
        try {
            const response = await getUserLoans(userId);
            setUserLoansList(response.data);
        } catch {
            setIsErrorGet(true);
        } finally {
            setIsFetchingGet(false);
        }
    }, []);

    return {
        isFetchingGet,
        isErrorGet,
        setIsErrorGet,
        userLoansList,
        fetchUserLoans,
    };
};

import {useCallback, useState} from 'react';
import {getUserLoans} from './../api/getUserLoans';

export const useGetUserLoans = () => {
    const [isFetchingGet, setIsFetchingGet] = useState<boolean>(false);
    const [isErrorGet, setIsErrorGet] = useState<boolean>(false);
    const [userLoansList, setUserLoansList] = useState<any>();

    const fetchUserLoans = useCallback(async (userId: string) => {
        setIsFetchingGet(true);
        try {
            const response: any = await getUserLoans(userId);
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
        userLoansList,
        fetchUserLoans,
    };
};

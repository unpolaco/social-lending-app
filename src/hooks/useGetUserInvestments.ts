import {useCallback, useState} from 'react';
import {getUserInvestments} from './../api/getUserInvestments';

export const useGetUserInvestments = () => {
    const [isFetchingGet, setIsFetchingGet] = useState<boolean>(false);
    const [isErrorGet, setIsErrorGet] = useState<boolean>(false);
    const [userInvestmentsList, setUserInvestmentsList] = useState<any>();

    const fetchUserInvestments = useCallback(async (userId: string) => {
        setIsFetchingGet(true);
        try {
            const response: any = await getUserInvestments(userId);
            setUserInvestmentsList(response.data);
        } catch {
            setIsErrorGet(true);
        } finally {
            setIsFetchingGet(false);
        }
    }, []);

    return {
        isFetchingGet,
        isErrorGet,
        userInvestmentsList,
        fetchUserInvestments,
    };
};

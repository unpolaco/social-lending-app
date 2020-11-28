import {useCallback, useState} from 'react';
import {getUserInvestments} from '../../../api/fetchInvestment';
import {InvestmentDto} from '../../../api/api.types';

export const useGetUserInvestments = () => {
    const [isFetchingGet, setIsFetchingGet] = useState<boolean>(false);
    const [isErrorGet, setIsErrorGet] = useState<boolean>(false);
    const [userInvestmentsList, setUserInvestmentsList] = useState<InvestmentDto>();

    const fetchUserInvestments = useCallback(async (userId: string) => {
        setIsFetchingGet(true);
        try {
            const response = await getUserInvestments(userId);
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
        setIsErrorGet,
        userInvestmentsList,
        fetchUserInvestments,
    };
};

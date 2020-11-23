import {useCallback, useState} from 'react';
import {getMakeLoanRepayment} from './../api/getMakeLoanRepayment';

export const useGetMakeLoanRepayment = () => {
    const [isFetchingGet, setIsFetchingGet] = useState<boolean>(false);
    const [isErrorGet, setIsErrorGet] = useState<boolean>(false);
    const [response, setResponse] = useState<number>();

    const fetchMakeLoanRepayment = useCallback(async (loanId: number) => {
        setIsFetchingGet(true);
        try {
            const response = await getMakeLoanRepayment(loanId);
            setResponse(response.status);
        } catch {
            setIsErrorGet(true);
        } finally {
            setIsFetchingGet(false);
        }
    }, []);

    return {
        isFetchingGet,
        isErrorGet,
        fetchMakeLoanRepayment,
        response,
    };
};

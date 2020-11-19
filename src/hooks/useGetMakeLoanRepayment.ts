import {useCallback, useState} from 'react';
import {getMakeLoanRepayment} from './../api/getMakeLoanRepayment';

export const useGetMakeLoanRepayment = () => {
    const [isFetchingGet, setIsFetchingGet] = useState<boolean>(false);
    const [isErrorGet, setIsErrorGet] = useState<boolean>(false);

    const fetchMakeLoanRepayment = useCallback(async (loanId: number) => {
        setIsFetchingGet(true);
        try {
            await getMakeLoanRepayment(loanId);
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
    };
};

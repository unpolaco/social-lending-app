import {useCallback, useState} from 'react';
import {getMakeLoanRepayment} from './../api/getMakeLoanRepayment';

export const useGetMakeLoanRepayment = () => {
    const [isFetchingGet, setIsFetchingGet] = useState<boolean>(false);
    const [isErrorGet, setIsErrorGet] = useState<boolean>(false);
    const [isPaid, setIsPaid] = useState<boolean>();

    const fetchMakeLoanRepayment = useCallback(async (loanId: number) => {
        setIsFetchingGet(true);
        try {
            await getMakeLoanRepayment(loanId);
            setIsPaid(true);
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
        isPaid,
        setIsErrorGet,
        setIsPaid,
    };
};

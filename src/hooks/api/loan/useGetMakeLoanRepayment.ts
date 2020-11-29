import {useCallback, useState} from 'react';
import {getMakeLoanRepayment} from '../../../api/fetchLoan';

export const useGetMakeLoanRepayment = () => {
    const [isFetchingGet, setIsFetchingGet] = useState<boolean>(false);
    const [isErrorPaid, setIsErrorPaid] = useState<boolean | string>(false);
    const [isPaid, setIsPaid] = useState<boolean>();

    const fetchMakeLoanRepayment = useCallback(async (loanId: number) => {
        setIsFetchingGet(true);
        try {
            await getMakeLoanRepayment(loanId);
            setIsPaid(true);
        } catch (error) {
            setIsErrorPaid(error.message);
        } finally {
            setIsFetchingGet(false);
        }
    }, []);

    return {
        isFetchingGet,
        isErrorPaid,
        fetchMakeLoanRepayment,
        isPaid,
        setIsErrorPaid,
        setIsPaid,
    };
};

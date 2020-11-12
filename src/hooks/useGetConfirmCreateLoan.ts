import {useCallback, useState} from 'react';
import {confirmCreateLoan} from '../api/confirmCreateLoan';

export const useGetConfirmCreateLoan = () => {
    const [isFetchingConfirmCreateLoan, setIsFetchingConfirmCreateLoan] = useState<boolean>(false);
    const [isErrorConfirmCreateLoan, setIsErrorConfirmCreateLoan] = useState<boolean>(false);
    const [response, setResponse] = useState<any>();

    const fetchConfirmCreateLoan = useCallback(async loanId => {
        setIsFetchingConfirmCreateLoan(true);
        try {
            const response: any = await confirmCreateLoan(loanId);
            setResponse(response);
        } catch {
            setIsErrorConfirmCreateLoan(true);
        } finally {
            setIsFetchingConfirmCreateLoan(false);
        }
    }, []);

    return {
        isFetchingConfirmCreateLoan,
        isErrorConfirmCreateLoan,
        fetchConfirmCreateLoan,
    };
};

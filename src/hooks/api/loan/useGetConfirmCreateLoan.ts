import {useCallback, useState} from 'react';
import {getConfirmCreateLoan} from '../../../api/fetchLoan';

export const useGetConfirmCreateLoan = () => {
    const [isFetchingConfirmCreateLoan, setIsFetchingConfirmCreateLoan] = useState<boolean>(false);
    const [isErrorConfirmCreateLoan, setIsErrorConfirmCreateLoan] = useState<boolean>(false);

    const fetchConfirmCreateLoan = useCallback(async loanId => {
        setIsFetchingConfirmCreateLoan(true);
        try {
            await getConfirmCreateLoan(loanId);
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

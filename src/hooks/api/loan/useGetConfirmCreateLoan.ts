import {useCallback, useState} from 'react';
import {getConfirmCreateLoan} from '../../../api/fetchLoan';

export const useGetConfirmCreateLoan = () => {
    const [isFetchingConfirmCreateLoan, setIsFetchingConfirmCreateLoan] = useState<boolean>(false);
    const [isErrorConfirmCreateLoan, setIsErrorConfirmCreateLoan] = useState<boolean>(false);
    const [isResponseConfirmCreateLoan, setIsResponseConfirmCreateLoan] = useState<boolean>(false);

    const fetchConfirmCreateLoan = useCallback(async loanId => {
        setIsFetchingConfirmCreateLoan(true);
        try {
            await getConfirmCreateLoan(loanId);
            setIsResponseConfirmCreateLoan(true);
        } catch {
            setIsErrorConfirmCreateLoan(true);
        } finally {
            setIsFetchingConfirmCreateLoan(false);
        }
    }, []);

    return {
        isErrorConfirmCreateLoan,
        setIsErrorConfirmCreateLoan,
        fetchConfirmCreateLoan,
        isFetchingConfirmCreateLoan,
        isResponseConfirmCreateLoan,
        setIsResponseConfirmCreateLoan,
    };
};

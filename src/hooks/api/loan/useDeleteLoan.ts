import {useCallback, useState} from 'react';
import {deleteLoan} from '../../../api/fetchLoan';

export const useDeleteLoan = () => {
    const [isFetchingDelete, setIsFetchingDelete] = useState<boolean>(false);
    const [isErrorDelete, setIsErrorDelete] = useState<boolean>(false);
    const [isResponseDelete, setIsResponseDelete] = useState<boolean>(false);

    const fetchDeleteLoan = useCallback(async (loanId: number) => {
        setIsFetchingDelete(true);
        try {
            await deleteLoan(loanId);
            setIsResponseDelete(true);
        } catch {
            setIsErrorDelete(true);
        } finally {
            setIsFetchingDelete(false);
        }
    }, []);

    return {
        isFetchingDelete,
        isErrorDelete,
        setIsErrorDelete,
        isResponseDelete,
        setIsResponseDelete,
        fetchDeleteLoan,
    };
};

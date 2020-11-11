import {useCallback, useState} from 'react';
import {createLoan} from '../api/createLoan';

export const useSaveCreateLoan = () => {
    const [isFetchingSave, setIsFetchingSave] = useState<boolean>(false);
    const [isErrorSave, setIsErrorSave] = useState<boolean>(false);
    const [response, setResponse] = useState<any>();

    const fetchCreateLoan = useCallback(async auctionId => {
        setIsFetchingSave(true);
        try {
            const response: any = await createLoan(auctionId);
            setResponse(response);
        } catch {
            setIsErrorSave(true);
        } finally {
            setIsFetchingSave(false);
        }
    }, []);

    return {
        isFetchingSave,
        isErrorSave,
        response,
        fetchCreateLoan,
    };
};

import {useCallback, useState} from 'react';
import {saveNewAuction} from '../api/saveNewAuction';

export const useSaveNewAuction = () => {
    const [isFetchingSave, setIsFetchingSave] = useState<boolean>(false);
    const [isErrorSave, setIsErrorSave] = useState<boolean>(false);
    const [response, setResponse] = useState<any>();

    const fetchNewAuction = useCallback(async newAuctionData => {
        setIsFetchingSave(true);
        try {
            const response: any = await saveNewAuction(newAuctionData);
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
        fetchNewAuction,
    };
};

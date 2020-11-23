import {useCallback, useState} from 'react';
import {saveNewAuction} from '../api/saveNewAuction';
import {NewAuctionDto} from '../api/api.types';

export const useSaveNewAuction = () => {
    const [isFetchingSave, setIsFetchingSave] = useState<boolean>(false);
    const [isErrorSave, setIsErrorSave] = useState<boolean>(false);
    const [response, setResponse] = useState<NewAuctionDto>();

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

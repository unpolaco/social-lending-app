import {useCallback, useState} from 'react';
import {saveNewAuction} from '../../../api/fetchAuction';
import {NewAuctionForm} from '../../../api/api.types';

export const useSaveNewAuction = () => {
    const [isFetchingSave, setIsFetchingSave] = useState<boolean>(false);
    const [isErrorSave, setIsErrorSave] = useState<boolean>(false);
    const [response, setResponse] = useState<NewAuctionForm>();

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

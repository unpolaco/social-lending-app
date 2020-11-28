import {useCallback, useState} from 'react';
import {saveNewAuction} from '../../../api/fetchAuction';

export const useSaveNewAuction = () => {
    const [isFetchingSave, setIsFetchingSave] = useState<boolean>(false);
    const [isErrorSave, setIsErrorSave] = useState<boolean>(false);
    const [isSaveResponse, setIsSaveResponse] = useState<boolean>();

    const fetchNewAuction = useCallback(async newAuctionData => {
        setIsFetchingSave(true);
        try {
            await saveNewAuction(newAuctionData);
            setIsSaveResponse(true);
        } catch {
            setIsErrorSave(true);
        } finally {
            setIsFetchingSave(false);
        }
    }, []);

    return {
        isFetchingSave,
        isErrorSave,
        setIsErrorSave,
        setIsSaveResponse,
        isSaveResponse,
        fetchNewAuction,
    };
};

import {useCallback, useState} from 'react';
import {saveNewOffer} from '../../../api/fetchOffer';

export const useSaveNewOffer = () => {
    const [isFetchingSave, setIsFetchingSave] = useState<boolean>(false);
    const [isErrorSave, setIsErrorSave] = useState<boolean>(false);
    const [isSaveResponse, setIsSaveResponse] = useState<boolean>(false);

    const fetchNewOffer = useCallback(async newOfferData => {
        setIsFetchingSave(true);
        try {
            await saveNewOffer(newOfferData);
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
        fetchNewOffer,
    };
};

import {useCallback, useState} from 'react';
import {saveNewOffer} from '../api/saveNewOffer';

export const useSaveNewOffer = () => {
    const [isFetchingSave, setIsFetchingSave] = useState<boolean>(false);
    const [isErrorSave, setIsErrorSave] = useState<boolean>(false);
    const [response, setResponse] = useState<any>();

    const fetchNewOffer = useCallback(async newOfferData => {
        setIsFetchingSave(true);
        try {
            const response: any = await saveNewOffer(newOfferData);
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
        fetchNewOffer,
    };
};

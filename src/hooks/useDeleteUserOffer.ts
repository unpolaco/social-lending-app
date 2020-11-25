import {useCallback, useState} from 'react';
import {deleteUserOffer} from './../api/deleteUserOffer';

export const useDeleteUserOffer = () => {
    const [isFetchingDelete, setIsFetchingDelete] = useState<boolean>(false);
    const [isErrorDelete, setIsErrorDelete] = useState<boolean>(false);
    const [response, setResponse] = useState<any>();

    const fetchDeleteUserOffer = useCallback(async (offerId: number) => {
        setIsFetchingDelete(true);
        try {
            const response = await deleteUserOffer(offerId);
            setResponse(response.data);
        } catch {
            setIsErrorDelete(true);
        } finally {
            setIsFetchingDelete(false);
        }
    }, []);

    return {
        isFetchingDelete,
        isErrorDelete,
        response,
        fetchDeleteUserOffer,
    };
};

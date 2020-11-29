import {useCallback, useState} from 'react';
import {deleteUserOffer} from '../../../api/fetchOffer';

export const useDeleteUserOffer = () => {
    const [isFetchingDelete, setIsFetchingDelete] = useState<boolean>(false);
    const [isErrorDelete, setIsErrorDelete] = useState<boolean>(false);
    const [isResponseDelete, setIsResponseDelete] = useState<boolean>(false);

    const fetchDeleteUserOffer = useCallback(async (offerId: number) => {
        setIsFetchingDelete(true);
        try {
            await deleteUserOffer(offerId);
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
        fetchDeleteUserOffer,
    };
};

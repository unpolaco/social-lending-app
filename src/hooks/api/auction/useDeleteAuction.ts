import {useCallback, useState} from 'react';
import {deleteAuction} from '../../../api/fetchAuction';

export const useDeleteAuction = () => {
    const [isFetchingDelete, setIsFetchingDelete] = useState<boolean>(false);
    const [isErrorDelete, setIsErrorDelete] = useState<boolean>(false);
    const [isResponseDelete, setIsResponseDelete] = useState<boolean>(false);

    const fetchDeleteAuction = useCallback(async auctionId => {
        setIsFetchingDelete(true);
        try {
            await deleteAuction(auctionId);
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
        isResponseDelete,
        setIsErrorDelete,
        setIsResponseDelete,
        fetchDeleteAuction,
    };
};

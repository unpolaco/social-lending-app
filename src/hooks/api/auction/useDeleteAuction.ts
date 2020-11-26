import {useCallback, useState} from 'react';
import {deleteAuction} from '../../../api/fetchAuction';

export const useDeleteAuction = () => {
    const [isFetchingDelete, setIsFetchingDelete] = useState<boolean>(false);
    const [isErrorDelete, setIsErrorDelete] = useState<boolean>(false);
    const [response, setResponse] = useState<any>();

    const fetchDeleteAuction = useCallback(async auctionId => {
        setIsFetchingDelete(true);
        try {
            const response: any = await deleteAuction(auctionId);
            setResponse(response);
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
        fetchDeleteAuction,
    };
};

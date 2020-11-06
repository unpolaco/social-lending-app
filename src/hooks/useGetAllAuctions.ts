import {useCallback, useState} from 'react';
import {getAllAuctions} from './../api/getAllAuctions';

export const useGetAllAuctions = () => {
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [auctionsList, setAuctionsList] = useState<any>();

    const fetchAllAuctions = useCallback(async () => {
        setIsFetching(true);
        try {
            const response: any = await getAllAuctions();
            setAuctionsList(response.data);
        } catch {
            setIsError(true);
        } finally {
            setIsFetching(false);
        }
    }, []);

    return {
        isFetching,
        isError,
        auctionsList,
        fetchAllAuctions,
    };
};

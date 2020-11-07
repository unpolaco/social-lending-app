import {useCallback, useState} from 'react';
import {getAllAuctions} from './../api/getAllAuctions';

export const useGetAllAuctions = () => {
    const [isFetchingGet, setIsFetchingGet] = useState<boolean>(false);
    const [isErrorGet, setIsErrorGet] = useState<boolean>(false);
    const [auctionsList, setAuctionsList] = useState<any>();

    const fetchAllAuctions = useCallback(async () => {
        setIsFetchingGet(true);
        try {
            const response: any = await getAllAuctions();
            setAuctionsList(response.data);
        } catch {
            setIsErrorGet(true);
        } finally {
            setIsFetchingGet(false);
        }
    }, []);

    return {
        isFetchingGet,
        isErrorGet,
        auctionsList,
        fetchAllAuctions,
    };
};

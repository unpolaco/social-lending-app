import {useCallback, useState} from 'react';
import {getAllAuctions} from '../../../api/fetchAuction';
import {AuctionDto} from '../../../api/api.types';

export const useGetAllAuctions = () => {
    const [isFetchingGet, setIsFetchingGet] = useState<boolean>(false);
    const [isErrorGet, setIsErrorGet] = useState<boolean>(false);
    const [auctionsList, setAuctionsList] = useState<AuctionDto>();

    const fetchAllAuctions = useCallback(async () => {
        setIsFetchingGet(true);
        try {
            const response = await getAllAuctions();
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

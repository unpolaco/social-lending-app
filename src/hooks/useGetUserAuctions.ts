import {useCallback, useState} from 'react';
import {getUserAuctions} from './../api/getUserAuctions';

export const useGetUserAuctions = () => {
    const [isFetchingGet, setIsFetchingGet] = useState<boolean>(false);
    const [isErrorGet, setIsErrorGet] = useState<boolean>(false);
    const [userAuctionsList, setUserAuctionsList] = useState<any>();

    const fetchUserAuctions = useCallback(async (userId: string) => {
        setIsFetchingGet(true);
        try {
            const response: any = await getUserAuctions(userId);
            setUserAuctionsList(response.data);
        } catch {
            setIsErrorGet(true);
        } finally {
            setIsFetchingGet(false);
        }
    }, []);

    return {
        isFetchingGet,
        isErrorGet,
        userAuctionsList,
        fetchUserAuctions,
    };
};

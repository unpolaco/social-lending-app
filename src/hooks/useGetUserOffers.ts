import {useCallback, useState} from 'react';
import {getUserOffers} from './../api/getUserOffers';

export const useGetUserOffers = () => {
    const [isFetchingGet, setIsFetchingGet] = useState<boolean>(false);
    const [isErrorGet, setIsErrorGet] = useState<boolean>(false);
    const [userOffersList, setUserOffersList] = useState<any>();

    const fetchUserOffers = useCallback(async (userId: string) => {
        setIsFetchingGet(true);
        try {
            const response: any = await getUserOffers(userId);
            setUserOffersList(response.data);
        } catch {
            setIsErrorGet(true);
        } finally {
            setIsFetchingGet(false);
        }
    }, []);

    return {
        isFetchingGet,
        isErrorGet,
        userOffersList,
        fetchUserOffers,
    };
};

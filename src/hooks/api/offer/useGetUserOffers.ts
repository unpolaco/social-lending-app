import {useCallback, useState} from 'react';
import {getUserOffers} from '../../../api/fetchOffer';
import {OfferDto} from '../../../api/api.types';

export const useGetUserOffers = () => {
    const [isFetchingGet, setIsFetchingGet] = useState<boolean>(false);
    const [isErrorGet, setIsErrorGet] = useState<boolean>(false);
    const [userOffersList, setUserOffersList] = useState<OfferDto>();

    const fetchUserOffers = useCallback(async (userId: string) => {
        setIsFetchingGet(true);
        try {
            const response = await getUserOffers(userId);
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
        setIsErrorGet,
        userOffersList,
        fetchUserOffers,
    };
};

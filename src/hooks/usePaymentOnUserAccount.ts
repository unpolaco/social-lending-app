import {useCallback, useState} from 'react';
import {postPaymentOnPlatformAccount} from '../api/postPaymentOnPlatformAccount';

export const usePaymentOnPlatformAccount = () => {
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [response, setResponse] = useState<any>();

    const fetchPaymentOnPlatformAccount = useCallback(async paymentDetails => {
        setIsFetching(true);
        try {
            const response: any = await postPaymentOnPlatformAccount(paymentDetails);
            setResponse(response);
        } catch {
            setIsError(true);
        } finally {
            setIsFetching(false);
        }
    }, []);

    return {
        isFetching,
        isError,
        response,
        fetchPaymentOnPlatformAccount,
    };
};

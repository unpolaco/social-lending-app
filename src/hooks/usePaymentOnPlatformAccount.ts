import {useCallback, useState} from 'react';
import {postPaymentOnPlatformAccount} from '../api/postPaymentOnPlatformAccount';

export const usePaymentOnPlatformAccount = () => {
    const [isFetchingSave, setIsFetchingSave] = useState<boolean>(false);
    const [isErrorSave, setIsErrorSave] = useState<boolean>(false);
    const [response, setResponse] = useState<any>();

    const fetchPaymentOnPlatformAccount = useCallback(async paymentDetails => {
        setIsFetchingSave(true);
        try {
            const response: any = await postPaymentOnPlatformAccount(paymentDetails);
            setResponse(response);
        } catch {
            setIsErrorSave(true);
        } finally {
            setIsFetchingSave(false);
        }
    }, []);

    return {
        isFetchingSave,
        isErrorSave,
        response,
        fetchPaymentOnPlatformAccount,
    };
};

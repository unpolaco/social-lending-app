import {useCallback, useState} from 'react';
import {postPaymentOnPlatformAccount} from '../api/postPaymentOnPlatformAccount';

export const usePaymentOnPlatformAccount = () => {
    const [isFetchingPaymentOnPlatform, setIsFetchingPaymentOnPlatform] = useState<boolean>(false);
    const [isErrorPaymentOnPlatform, setIsErrorPaymentOnPlatform] = useState<boolean>(false);
    const [responsePaymentOnPlatform, setResponsePaymentOnPlatform] = useState<any>();

    const fetchPaymentOnPlatformAccount = useCallback(async paymentDetails => {
        setIsFetchingPaymentOnPlatform(true);
        try {
            const response: any = await postPaymentOnPlatformAccount(paymentDetails);
            setResponsePaymentOnPlatform(response);
        } catch {
            setIsErrorPaymentOnPlatform(true);
        } finally {
            setIsFetchingPaymentOnPlatform(false);
        }
    }, []);

    return {
        isFetchingPaymentOnPlatform,
        isErrorPaymentOnPlatform,
        responsePaymentOnPlatform,
        fetchPaymentOnPlatformAccount,
    };
};

import {useCallback, useState} from 'react';
import {postPaymentOnPlatformAccount} from '../../../api/fetchPayment';

export const usePaymentOnPlatformAccount = () => {
    const [isFetchingPaymentOnPlatform, setIsFetchingPaymentOnPlatform] = useState<boolean>(false);
    const [isErrorPaymentOnPlatform, setIsErrorPaymentOnPlatform] = useState<boolean | string>(false);
    const [isResponsePaymentOnPlatform, setIsResponsePaymentOnPlatform] = useState<boolean>(false);

    const fetchPaymentOnPlatformAccount = useCallback(async paymentDetails => {
        setIsFetchingPaymentOnPlatform(true);
        try {
            await postPaymentOnPlatformAccount(paymentDetails);
            setIsResponsePaymentOnPlatform(true);
        } catch (error) {
            setIsErrorPaymentOnPlatform(error.message);
        } finally {
            setIsFetchingPaymentOnPlatform(false);
        }
    }, []);

    return {
        isFetchingPaymentOnPlatform,
        isErrorPaymentOnPlatform,
        isResponsePaymentOnPlatform,
        fetchPaymentOnPlatformAccount,
        setIsErrorPaymentOnPlatform,
        setIsResponsePaymentOnPlatform,
    };
};

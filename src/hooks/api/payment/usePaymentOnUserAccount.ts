import {useCallback, useState} from 'react';
import {postPaymentOnUserAccount} from '../../../api/fetchPayment';

export const usePaymentOnUserAccount = () => {
    const [isFetchingPaymentOnUserAccount, setIsFetchingPaymentOnUserAccount] = useState<boolean>(false);
    const [isErrorPaymentOnUserAccount, setIsErrorPaymentOnUserAccount] = useState<boolean>(false);
    const [responsePaymentOnUserAccount, setResponsePaymentOnUserAccount] = useState<any>();

    const fetchPaymentOnUserAccount = useCallback(async paymentDetails => {
        setIsFetchingPaymentOnUserAccount(true);
        try {
            const response: any = await postPaymentOnUserAccount(paymentDetails);
            setResponsePaymentOnUserAccount(response);
        } catch {
            setIsErrorPaymentOnUserAccount(true);
        } finally {
            setIsFetchingPaymentOnUserAccount(false);
        }
    }, []);

    return {
        isFetchingPaymentOnUserAccount,
        isErrorPaymentOnUserAccount,
        responsePaymentOnUserAccount,
        fetchPaymentOnUserAccount,
        setIsErrorPaymentOnUserAccount,
        setResponsePaymentOnUserAccount,
    };
};

import {useCallback, useState} from 'react';
import {postPaymentOnUserAccount} from '../../../api/fetchPayment';

export const usePaymentOnUserAccount = () => {
    const [isFetchingPaymentOnUserAccount, setIsFetchingPaymentOnUserAccount] = useState<boolean>(false);
    const [isErrorPaymentOnUserAccount, setIsErrorPaymentOnUserAccount] = useState<boolean | string>(false);
    const [isResponsePaymentOnUserAccount, setIsResponsePaymentOnUserAccount] = useState<boolean>();

    const fetchPaymentOnUserAccount = useCallback(async paymentDetails => {
        setIsFetchingPaymentOnUserAccount(true);
        try {
            await postPaymentOnUserAccount(paymentDetails);
            setIsResponsePaymentOnUserAccount(true);
        } catch (error) {
            setIsErrorPaymentOnUserAccount(error.message);
        } finally {
            setIsFetchingPaymentOnUserAccount(false);
        }
    }, []);

    return {
        isFetchingPaymentOnUserAccount,
        isErrorPaymentOnUserAccount,
        isResponsePaymentOnUserAccount,
        fetchPaymentOnUserAccount,
        setIsErrorPaymentOnUserAccount,
        setIsResponsePaymentOnUserAccount,
    };
};

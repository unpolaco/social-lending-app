import {useCallback, useState} from 'react';
import {getAccountDetails} from '../../../api/fetchAccount';
import {AccountDto} from '../../../api/api.types';

export const useGetAccountDetails = () => {
    const [isFetchingGet, setIsFetchingGet] = useState<boolean>(false);
    const [isErrorGet, setIsErrorGet] = useState<boolean>(false);
    const [accountDetails, setAccountDetails] = useState<AccountDto>();

    const fetchAccountDetails = useCallback(async (userName: string) => {
        setIsFetchingGet(true);
        try {
            const response = await getAccountDetails(userName);
            setAccountDetails(response.data);
        } catch {
            setIsErrorGet(true);
        } finally {
            setIsFetchingGet(false);
        }
    }, []);

    return {
        isFetchingGet,
        isErrorGet,
        accountDetails,
        fetchAccountDetails,
    };
};

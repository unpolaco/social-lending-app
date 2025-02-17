import {useCallback, useState} from 'react';
import {getAccountPrivateProfile} from '../../../api/fetchAccount';
import {AccountDto} from '../../../api/api.types';

export const useGetAccountPrivateProfile = () => {
    const [isFetchingGet, setIsFetchingGet] = useState<boolean>(false);
    const [isErrorGet, setIsErrorGet] = useState<boolean>(false);
    const [accountDetails, setAccountDetails] = useState<AccountDto>();

    const fetchAccountDetails = useCallback(async (userName: string) => {
        try {
            const response = await getAccountPrivateProfile(userName);
            setAccountDetails(response.data);
        } catch {
            setIsErrorGet(true);
        } finally {
            setIsFetchingGet(false);
        }
    }, []);

    return {
        isErrorGet,
        setIsErrorGet,
        isFetchingGet,
        accountDetails,
        fetchAccountDetails,
    };
};

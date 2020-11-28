import {useCallback, useState} from 'react';
import {getAccountPrivateProfile} from '../../../api/fetchAccount';
import {AccountDto} from '../../../api/api.types';

export const useGetAccountPrivateProfile = () => {
    const [isErrorGet, setIsErrorGet] = useState<boolean>(false);
    const [accountDetails, setAccountDetails] = useState<AccountDto>();

    const fetchAccountDetails = useCallback(async (userName: string) => {
        try {
            const response = await getAccountPrivateProfile(userName);
            setAccountDetails(response.data);
        } catch {
            setIsErrorGet(true);
        }
    }, []);

    return {
        isErrorGet,
        setIsErrorGet,
        accountDetails,
        fetchAccountDetails,
    };
};

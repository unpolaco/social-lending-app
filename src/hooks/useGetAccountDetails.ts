import {useCallback, useState} from 'react';
import {getAccountDetails} from './../api/getAccountDetails';

export const useGetAccountDetails = () => {
    const [isFetchingGet, setIsFetchingGet] = useState<boolean>(false);
    const [isErrorGet, setIsErrorGet] = useState<boolean>(false);
    const [accountDetails, setAccountDetails] = useState<any>();

    const fetchAccountDetails = useCallback(async (userName: string) => {
        setIsFetchingGet(true);
        try {
            const response: any = await getAccountDetails(userName);
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

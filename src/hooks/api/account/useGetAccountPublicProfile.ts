import {useCallback, useState} from 'react';
import {getAccountPublicProfile} from '../../../api/fetchAccount';
import {PublicAccountDto} from '../../../api/api.types';

export const useGetAccountPublicProfile = () => {
    const [isFetchingGet, setIsFetchingGet] = useState<boolean>(false);
    const [isErrorGet, setIsErrorGet] = useState<boolean>(false);
    const [publicProfile, setPublicProfile] = useState<PublicAccountDto>();

    const fetchAccountPublicProfile = useCallback(async (userName: string) => {
        setIsFetchingGet(true);
        try {
            const response = await getAccountPublicProfile(userName);
            setPublicProfile(response.data);
        } catch {
            setIsErrorGet(true);
        } finally {
            setIsFetchingGet(false);
        }
    }, []);

    return {
        isFetchingGet,
        isErrorGet,
        setIsErrorGet,
        publicProfile,
        fetchAccountPublicProfile,
    };
};

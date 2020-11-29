import {axios} from './axios';
import {apiAccountDetails, apiAccountPublicProfile} from '../helpers/constants-api';

export const getAccountPrivateProfile = (userName: string) => {
    return axios.get(`${apiAccountDetails}/${userName}`);
};

export const getAccountPublicProfile = (userName: string) => {
    return axios.get(`${apiAccountPublicProfile}/${userName}`);
};

import {axios} from './axios';
import {apiAccountDetails} from '../helpers/constants-api';

export const getAccountDetails = (userName: string) => {
    return axios.get(`${apiAccountDetails}/${userName}`);
};

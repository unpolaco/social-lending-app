import {axios} from './axios';
import {apiInvestments} from '../helpers/constants-api';

export const getUserInvestments = (userId: string) => {
    return axios.get(`${apiInvestments}/${userId}`);
};

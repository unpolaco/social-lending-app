import {axios} from './axios';
import {apiOffers} from '../helpers/constants-api';

export const getUserOffers = (userId: string) => {
    return axios.get(`${apiOffers}/${userId}`);
};

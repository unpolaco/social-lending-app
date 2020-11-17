import {axios} from './axios';
import {apiAuctions} from '../helpers/constants-api';

export const getAllAuctions = () => {
    return axios.get(apiAuctions);
};

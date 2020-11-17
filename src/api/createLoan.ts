import {AxiosRequestConfig} from 'axios';
import {axios} from './axios';
import {apiAuctions} from '../helpers/constants-api';

export const createLoan = (auctionId: AxiosRequestConfig | undefined) => {
    return axios.get(`${apiAuctions}/${auctionId}/create-loan`);
};

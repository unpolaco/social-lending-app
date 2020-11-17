import {AxiosRequestConfig} from 'axios';
import {axios} from './axios';
import {apiAuctions} from '../helpers/constants-api';

export const saveNewAuction = (newAuctionData: AxiosRequestConfig | undefined) => {
    return axios.post(apiAuctions, newAuctionData);
};

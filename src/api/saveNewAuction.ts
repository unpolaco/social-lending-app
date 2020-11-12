import Axios, {AxiosRequestConfig} from 'axios';
import {apiAuctions} from '../helpers/constants-api';

const axios = Axios.create({baseURL: apiAuctions});

export const saveNewAuction = (newAuctionData: AxiosRequestConfig | undefined) => {
    return axios.post('', newAuctionData);
};

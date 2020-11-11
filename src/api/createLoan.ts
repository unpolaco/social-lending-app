import Axios, {AxiosRequestConfig} from 'axios';
import {apiAuctions} from '../helpers/constants-api';

const axios = Axios.create({baseURL: apiAuctions});

export const createLoan = (auctionId: AxiosRequestConfig | undefined) => {
    return axios.get(`/${auctionId}/create-loan`, auctionId);
};

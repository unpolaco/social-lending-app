import {axios} from './axios';
import {apiAuctionsBorrower} from '../helpers/constants-api';

export const getUserAuctions = (userId: string) => {
    return axios.get(`${apiAuctionsBorrower}/${userId}`);
};

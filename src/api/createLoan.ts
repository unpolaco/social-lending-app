import {axios} from './axios';
import {apiAuctions} from '../helpers/constants-api';

export const createLoan = (auctionId: string) => {
    return axios.get(`${apiAuctions}/${auctionId}/create-loan`);
};

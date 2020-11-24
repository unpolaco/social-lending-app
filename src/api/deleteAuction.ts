import {axios} from './axios';
import {apiAuctions} from '../helpers/constants-api';

export const deleteAuction = (auctionId: number) => {
    return axios.delete(`${apiAuctions}/${auctionId}`);
};

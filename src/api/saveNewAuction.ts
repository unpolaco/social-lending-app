import {NewAuctionDto} from './api.types';
import {axios} from './axios';
import {apiAuctions} from '../helpers/constants-api';

export const saveNewAuction = (newAuctionData: NewAuctionDto) => {
    return axios.post(apiAuctions, newAuctionData);
};

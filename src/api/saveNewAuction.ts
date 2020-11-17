import {apiSaveNewAuctionDto} from './api.types';
import {axios} from './axios';
import {apiAuctions} from '../helpers/constants-api';

export const saveNewAuction = (newAuctionData: apiSaveNewAuctionDto) => {
    return axios.post(apiAuctions, newAuctionData);
};

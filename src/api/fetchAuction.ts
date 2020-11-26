import {axios} from './axios';
import {apiAuctions, apiAuctionsBorrower} from '../helpers/constants-api';
import {NewAuctionDto} from './api.types';

export const getAllAuctions = () => {
    return axios.get(apiAuctions);
};

export const getUserAuctions = (userId: string) => {
    return axios.get(`${apiAuctionsBorrower}/${userId}`);
};

export const saveNewAuction = (newAuctionData: NewAuctionDto) => {
    return axios.post(apiAuctions, newAuctionData);
};

export const createLoan = (auctionId: string) => {
    return axios.get(`${apiAuctions}/${auctionId}/create-loan`);
};

export const deleteAuction = (auctionId: number) => {
    return axios.delete(`${apiAuctions}/${auctionId}`);
};

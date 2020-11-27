import {axios} from './axios';
import {apiOffers} from '../helpers/constants-api';
import {NewOfferForm} from './api.types';

export const getUserOffers = (userId: string) => {
    return axios.get(`${apiOffers}/${userId}`);
};

export const saveNewOffer = (newOfferData: NewOfferForm) => {
    return axios.post(apiOffers, newOfferData);
};

export const deleteUserOffer = (offerId: number) => {
    return axios.delete(`${apiOffers}/${offerId}`);
};

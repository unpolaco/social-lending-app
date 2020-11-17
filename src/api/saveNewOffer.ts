import {axios} from './axios';
import {apiOffers} from '../helpers/constants-api';
import {apiSaveNewOfferDto} from './api.types';

export const saveNewOffer = (newOfferData: apiSaveNewOfferDto) => {
    return axios.post(apiOffers, newOfferData);
};

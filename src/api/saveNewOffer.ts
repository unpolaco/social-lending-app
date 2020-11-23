import {axios} from './axios';
import {apiOffers} from '../helpers/constants-api';
import {NewOfferDto} from './api.types';

export const saveNewOffer = (newOfferData: NewOfferDto) => {
    return axios.post(apiOffers, newOfferData);
};

import {AxiosRequestConfig} from 'axios';
import {axios} from './axios';
import {apiOffers} from '../helpers/constants-api';

export const saveNewOffer = (newOfferData: AxiosRequestConfig | undefined) => {
    return axios.post(apiOffers, newOfferData);
};

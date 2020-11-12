import Axios, {AxiosRequestConfig} from 'axios';
import {apiOffers} from '../helpers/constants-api';

const axios = Axios.create({baseURL: apiOffers});

export const saveNewOffer = (newOfferData: AxiosRequestConfig | undefined) => {
    return axios.post('', newOfferData);
};

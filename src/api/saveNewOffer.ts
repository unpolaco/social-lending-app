import Axios from 'axios';
import {apiOffers} from '../helpers/constants-api';

const axios = Axios.create({baseURL: apiOffers});

export const saveNewOffer = (newOfferData: any) => {
    return axios.post('', newOfferData);
};

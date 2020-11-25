import {axios} from './axios';
import {apiOffers} from '../helpers/constants-api';

export const deleteUserOffer = (offerId: number) => {
    return axios.delete(`${apiOffers}/${offerId}`);
};

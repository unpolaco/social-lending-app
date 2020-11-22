import {apiPaymentDto} from './api.types';
import {axios} from './axios';
import {apiPaymentOnUserAccount} from '../helpers/constants-api';

export const postPaymentOnUserAccount = (paymentDetails: apiPaymentDto) => {
    return axios.post(apiPaymentOnUserAccount, paymentDetails);
};

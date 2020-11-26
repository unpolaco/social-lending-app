import {PaymentDto} from './api.types';
import {axios} from './axios';
import {apiPaymentOnPlatformAccount, apiPaymentOnUserAccount} from '../helpers/constants-api';

export const postPaymentOnPlatformAccount = (paymentDetails: PaymentDto) => {
    return axios.post(apiPaymentOnPlatformAccount, paymentDetails);
};

export const postPaymentOnUserAccount = (paymentDetails: PaymentDto) => {
    return axios.post(apiPaymentOnUserAccount, paymentDetails);
};

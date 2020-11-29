import {PaymentForm} from './api.types';
import {axios} from './axios';
import {apiPaymentOnPlatformAccount, apiPaymentOnUserAccount} from '../helpers/constants-api';

export const postPaymentOnPlatformAccount = (paymentDetails: PaymentForm) => {
    return axios.post(apiPaymentOnPlatformAccount, paymentDetails);
};

export const postPaymentOnUserAccount = (paymentDetails: PaymentForm) => {
    return axios.post(apiPaymentOnUserAccount, paymentDetails);
};

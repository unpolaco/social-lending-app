import {PaymentDto} from './api.types';
import {axios} from './axios';
import {apiPaymentOnPlatformAccount} from '../helpers/constants-api';

export const postPaymentOnPlatformAccount = (paymentDetails: PaymentDto) => {
    return axios.post(apiPaymentOnPlatformAccount, paymentDetails);
};

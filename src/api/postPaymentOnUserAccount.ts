import {PaymentDto} from './api.types';
import {axios} from './axios';
import {apiPaymentOnUserAccount} from '../helpers/constants-api';

export const postPaymentOnUserAccount = (paymentDetails: PaymentDto) => {
    return axios.post(apiPaymentOnUserAccount, paymentDetails);
};

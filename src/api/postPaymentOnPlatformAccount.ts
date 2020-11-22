import {apiPaymentDto} from './api.types';
import {axios} from './axios';
import {apiPaymentOnPlatformAccount} from '../helpers/constants-api';

export const postPaymentOnPlatformAccount = (paymentDetails: apiPaymentDto) => {
    return axios.post(apiPaymentOnPlatformAccount, paymentDetails);
};

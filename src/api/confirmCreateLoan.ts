import {AxiosRequestConfig} from 'axios';
import {axios} from './axios';
import {apiLoans} from '../helpers/constants-api';

export const confirmCreateLoan = (loanId: AxiosRequestConfig | undefined) => {
    return axios.get(`${apiLoans}/${loanId}/activate`);
};

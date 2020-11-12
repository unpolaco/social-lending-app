import Axios, {AxiosRequestConfig} from 'axios';
import {apiLoans} from '../helpers/constants-api';

const axios = Axios.create({baseURL: apiLoans});

export const confirmCreateLoan = (loanId: AxiosRequestConfig | undefined) => {
    return axios.get(`/${loanId}/activate`);
};

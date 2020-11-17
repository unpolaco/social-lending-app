import {axios} from './axios';
import {apiLoans} from '../helpers/constants-api';

export const confirmCreateLoan = (loanId: string) => {
    return axios.get(`${apiLoans}/${loanId}/activate`);
};

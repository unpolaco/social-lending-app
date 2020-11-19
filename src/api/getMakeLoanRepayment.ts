import {axios} from './axios';
import {apiLoans} from '../helpers/constants-api';

export const getMakeLoanRepayment = (loanId: number) => {
    return axios.get(`${apiLoans}/${loanId}/repay`);
};

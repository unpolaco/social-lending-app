import {axios} from './axios';
import {apiLoans} from '../helpers/constants-api';

export const getUserLoans = (userId: string) => {
    return axios.get(`${apiLoans}/borrower/${userId}`);
};

export const confirmCreateLoan = (loanId: string) => {
    return axios.get(`${apiLoans}/${loanId}/activate`);
};

export const getMakeLoanRepayment = (loanId: number) => {
    return axios.get(`${apiLoans}/${loanId}/repay`);
};

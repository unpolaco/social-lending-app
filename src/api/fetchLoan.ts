import {axios} from './axios';
import {apiLoans} from '../helpers/constants-api';

export const getUserLoans = (userId: string) => {
    return axios.get(`${apiLoans}/borrower/${userId}`);
};

export const getConfirmCreateLoan = (loanId: string) => {
    return axios.get(`${apiLoans}/${loanId}/activate`);
};

export const getMakeLoanRepayment = (loanId: number) => {
    return axios.get(`${apiLoans}/${loanId}/repay`);
};

export const deleteLoan = (loanId: number) => {
    return axios.delete(`${apiLoans}/${loanId}/reject`);
};

import {axios} from './axios';
import {apiLoans} from '../helpers/constants-api';

export const getUserLoans = (userId: string) => {
    return axios.get(`${apiLoans}/borrower/${userId}`);
};

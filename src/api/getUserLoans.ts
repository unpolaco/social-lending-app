import Axios from 'axios';
import {apiLoans} from '../helpers/constants-api';

const axios = Axios.create({baseURL: apiLoans});

export const getUserLoans = (userId: string) => {
    return axios.get(`/${userId}`);
};

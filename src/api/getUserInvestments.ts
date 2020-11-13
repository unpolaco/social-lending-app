import Axios from 'axios';
import {apiInvestments} from '../helpers/constants-api';

const axios = Axios.create({baseURL: apiInvestments});

export const getUserInvestments = (userId: string) => {
    return axios.get(`/${userId}`);
};

import Axios from 'axios';
import {apiAuctions} from '../helpers/constants-api';

const axios = Axios.create({baseURL: apiAuctions});

export const getUserAuctions = (userId: string) => {
    return axios.get(`/${userId}`);
};

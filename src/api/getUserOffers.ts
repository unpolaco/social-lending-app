import Axios from 'axios';
import {apiOffers} from '../helpers/constants-api';

const axios = Axios.create({baseURL: apiOffers});

export const getUserOffers = (userId: string) => {
    return axios.get(`/${userId}`);
};

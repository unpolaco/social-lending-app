import Axios from 'axios';
import {apiAuctions} from '../helpers/constants-api';

const axios = Axios.create({baseURL: apiAuctions});

export const getAllAuctions = () => {
    return axios.get('');
};

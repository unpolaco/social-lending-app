import Axios from 'axios';
import {apiBase} from '../helpers/constants-api';

export const axios = Axios.create({baseURL: apiBase});

import {axios} from './axios';
import {apiInvestments} from '../helpers/constants-api';
import {OpinionsDto} from './api.types';

export const getUserInvestments = (userId: string) => {
    return axios.get(`${apiInvestments}/${userId}`);
};

export const leaveOpinion = (investmentId: string, opinionDetails: OpinionsDto) => {
    return axios.put(`${apiInvestments}/${investmentId}/give-opinion`, opinionDetails);
};

import {axios} from './axios';
import {apiInvestments} from '../helpers/constants-api';
import {OpinionForm} from './api.types';

export const getUserInvestments = (userId: string) => {
    return axios.get(`${apiInvestments}/${userId}`);
};

export const leaveOpinion = (investmentId: number, opinionDetails: OpinionForm) => {
    return axios.put(`${apiInvestments}/${investmentId}/give-opinion`, opinionDetails);
};

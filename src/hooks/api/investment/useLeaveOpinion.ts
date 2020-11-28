import {useCallback, useState} from 'react';
import {leaveOpinion} from './../../../api/fetchInvestment';
import {OpinionForm} from '../../../api/api.types';

export const useLeaveOpinion = () => {
    const [isErrorLeaveOpinion, setIsErrorLeaveOpinion] = useState<boolean>(false);
    const [isResponse, setIsResponse] = useState<boolean>(false);

    const fetchLeaveOpinion = useCallback(async (investmentId: number, opinionDetails: OpinionForm) => {
        try {
            await leaveOpinion(investmentId, opinionDetails);
            setIsResponse(true);
        } catch {
            setIsErrorLeaveOpinion(true);
        }
    }, []);

    return {
        fetchLeaveOpinion,
        isErrorLeaveOpinion,
        setIsErrorLeaveOpinion,
        isResponse,
        setIsResponse,
    };
};

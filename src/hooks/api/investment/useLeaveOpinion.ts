import {useCallback, useState} from 'react';
import {leaveOpinion} from './../../../api/fetchInvestment';
import {OpinionForm} from '../../../api/api.types';

export const useLeaveOpinion = () => {
    const [isFetchingLeaveOpinion, setIsFetchingLeaveOpinion] = useState<boolean>(false);
    const [isErrorLeaveOpinion, setIsErrorLeaveOpinion] = useState<boolean>(false);
    const [isResponse, setIsResponse] = useState<boolean>(false);

    const fetchLeaveOpinion = useCallback(async (investmentId: number, opinionDetails: OpinionForm) => {
        setIsFetchingLeaveOpinion(true);
        try {
            await leaveOpinion(investmentId, opinionDetails);
            setIsResponse(true);
        } catch {
            setIsErrorLeaveOpinion(true);
        } finally {
            setIsFetchingLeaveOpinion(false);
        }
    }, []);

    return {
        fetchLeaveOpinion,
        isErrorLeaveOpinion,
        setIsErrorLeaveOpinion,
        isFetchingLeaveOpinion,
        isResponse,
        setIsResponse,
    };
};

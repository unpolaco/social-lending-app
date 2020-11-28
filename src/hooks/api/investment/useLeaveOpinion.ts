import {useCallback, useState} from 'react';
import {leaveOpinion} from './../../../api/fetchInvestment';
import {OpinionForm} from '../../../api/api.types';

export const useLeaveOpinion = () => {
    const [isFetchingLeaveOpinion, setIsFetchingLeaveOpinion] = useState<boolean>(false);
    const [isErrorLeaveOpinion, setIsErrorLeaveOpinion] = useState<any>(false);
    const [response, setResponse] = useState<any>();

    const fetchLeaveOpinion = useCallback(async (investmentId: number, opinionDetails: OpinionForm) => {
        setIsFetchingLeaveOpinion(true);
        try {
            await leaveOpinion(investmentId, opinionDetails);
            setResponse(true);
        } catch {
            setIsErrorLeaveOpinion(true);
        } finally {
            setIsFetchingLeaveOpinion(false);
        }
    }, []);

    return {
        isFetchingLeaveOpinion,
        isErrorLeaveOpinion,
        response,
        fetchLeaveOpinion,
        setIsErrorLeaveOpinion,
        setResponse,
    };
};

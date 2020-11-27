import {useCallback, useState} from 'react';
import {leaveOpinion} from './../../../api/fetchInvestment';
import {OpinionsForm} from '../../../api/api.types';

export const useLeaveOpinion = () => {
    const [isFetchingLeaveOpinion, setIsFetchingLeaveOpinion] = useState<boolean>(false);
    const [isErrorLeaveOpinion, setIsErrorLeaveOpinion] = useState<boolean>(false);
    const [response, setUserInvestmentsList] = useState();

    const fetchLeaveOpinion = useCallback(async (investmentId: string, opinionDetails: OpinionsForm) => {
        setIsFetchingLeaveOpinion(true);
        try {
            const response = await leaveOpinion(investmentId, opinionDetails);
            setUserInvestmentsList(response.data);
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
    };
};

import {useCallback, useState} from 'react';
import {createLoan} from '../../../api/fetchAuction';
import {LoanDto} from '../../../api/api.types';

export const useGetCreateLoan = () => {
    const [isFetchingCreateLoan, setIsFetchingCreateLoan] = useState<boolean>(false);
    const [isErrorCreateLoan, setIsErrorCreateLoan] = useState<boolean>(false);
    const [loanDetails, setLoanDetails] = useState<LoanDto>();

    const fetchCreateLoan = useCallback(async auctionId => {
        setIsFetchingCreateLoan(true);
        try {
            const response = await createLoan(auctionId);
            setLoanDetails(response.data);
        } catch {
            setIsErrorCreateLoan(true);
        } finally {
            setIsFetchingCreateLoan(false);
        }
    }, []);

    return {
        isFetchingCreateLoan,
        isErrorCreateLoan,
        setIsErrorCreateLoan,
        loanDetails,
        fetchCreateLoan,
    };
};

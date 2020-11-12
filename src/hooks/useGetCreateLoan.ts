import {useCallback, useState} from 'react';
import {createLoan} from '../api/createLoan';

export const useGetCreateLoan = () => {
    const [isFetchingCreateLoan, setIsFetchingCreateLoan] = useState<boolean>(false);
    const [isErrorCreateLoan, setIsErrorCreateLoan] = useState<boolean>(false);
    const [loanDetails, setLoanDetails] = useState<any>();

    const fetchCreateLoan = useCallback(async auctionId => {
        setIsFetchingCreateLoan(true);
        try {
            const response: any = await createLoan(auctionId);
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
        loanDetails,
        fetchCreateLoan,
    };
};

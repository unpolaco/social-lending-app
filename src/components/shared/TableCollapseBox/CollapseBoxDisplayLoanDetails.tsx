import React from 'react';
import {Typography, Button, CircularProgress} from '@material-ui/core/';
import {useGetMakeLoanRepayment} from '../../../hooks/useGetMakeLoanRepayment';
import {ScheduleWrapper, RepaymentWrapper, TextBold, TextLight, LoanDetailWrapper} from './CollapseBox.styles';
import {AuctionData} from '../Table/Table.types';

interface CollapseBoxCreateLoanProps {
    row: AuctionData;
    page: string;
    fetchUserLoans?: any;
}

export const CollapseBoxDisplayLoanDetails: React.FC<CollapseBoxCreateLoanProps> = ({row, fetchUserLoans, page}) => {
    const {isFetchingGet, isErrorGet, fetchMakeLoanRepayment} = useGetMakeLoanRepayment();

    if (isFetchingGet) {
        return <CircularProgress />;
    }
    if (isErrorGet) {
        alert('Error');
    }

    async function handleMakeRepayment() {
        await fetchMakeLoanRepayment(row.id);
        fetchUserLoans('Bilbo_Baggins');
    }

    return (
        <LoanDetailWrapper>
            <Typography>Loan repayment details</Typography>
            {page === 'borrowerUserLoans' && (
                <Button variant="outlined" onClick={handleMakeRepayment}>
                    Pay repayment
                </Button>
            )}
            {row.schedule.map((repayment: any) => (
                <ScheduleWrapper key={repayment.date} color={row.status}>
                    <RepaymentWrapper>
                        <TextLight>date</TextLight>
                        <TextBold>{repayment.date}</TextBold>
                    </RepaymentWrapper>
                    <RepaymentWrapper>
                        <TextLight>repayment amount</TextLight>
                        <TextBold>{repayment.value} zł</TextBold>
                    </RepaymentWrapper>
                    <RepaymentWrapper>
                        <TextLight>status</TextLight>
                        <TextBold>{repayment.status}</TextBold>
                    </RepaymentWrapper>
                </ScheduleWrapper>
            ))}
        </LoanDetailWrapper>
    );
};

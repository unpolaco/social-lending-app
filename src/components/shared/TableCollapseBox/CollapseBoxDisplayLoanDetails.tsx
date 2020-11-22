import React, {useState} from 'react';
import {Button, CircularProgress, Snackbar} from '@material-ui/core/';
import {useGetMakeLoanRepayment} from '../../../hooks/useGetMakeLoanRepayment';
import {ScheduleWrapper, RepaymentWrapper, TextBold, TextLight, LoanDetailWrapper, Title} from './CollapseBox.styles';
import {AuctionData} from '../Table/Table.types';
import {Alert} from '../Alert/Alert';

interface CollapseBoxCreateLoanProps {
    row: AuctionData;
    page: string;
    fetchUserLoans?: any;
}

export const CollapseBoxDisplayLoanDetails: React.FC<CollapseBoxCreateLoanProps> = ({row, fetchUserLoans, page}) => {
    const {isFetchingGet, isErrorGet, fetchMakeLoanRepayment, response} = useGetMakeLoanRepayment();
    const [open, setOpen] = useState<boolean>(true);

    async function handleMakeRepayment() {
        await fetchMakeLoanRepayment(row.id);
        console.log(response);

        await setOpen(true);
        fetchUserLoans('Bilbo_Baggins');
    }

    console.log(response);
    if (isFetchingGet) {
        return <CircularProgress />;
    }
    if (isErrorGet) {
        alert('Error');
    }
    return (
        <LoanDetailWrapper>
            <Title>Loan repayment details</Title>
            {page === 'borrowerUserLoans' && (
                <Button variant="outlined" onClick={handleMakeRepayment}>
                    Pay repayment
                </Button>
            )}
            <ScheduleWrapper>
                <TextLight>date</TextLight>
                <TextLight>amount</TextLight>
                <TextLight>status</TextLight>
            </ScheduleWrapper>
            {row.schedule.map((repayment: any) => (
                <ScheduleWrapper key={repayment.date} color={repayment.status}>
                    <RepaymentWrapper>
                        <TextBold>{repayment.date}</TextBold>
                    </RepaymentWrapper>
                    <RepaymentWrapper>
                        <TextBold>{repayment.value} zł</TextBold>
                    </RepaymentWrapper>
                    <RepaymentWrapper>
                        <TextBold>{repayment.status}</TextBold>
                    </RepaymentWrapper>
                </ScheduleWrapper>
            ))}
            <Snackbar open={open} autoHideDuration={4000}>
                <Alert onClose={() => setOpen(false)} severity="success">
                    {response === 201 ? 'Your payment was successfull!' : 'Something was wrong'}
                </Alert>
            </Snackbar>
        </LoanDetailWrapper>
    );
};

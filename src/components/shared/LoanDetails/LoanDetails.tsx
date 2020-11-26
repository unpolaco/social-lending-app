import React from 'react';
import {Button, CircularProgress, Snackbar} from '@material-ui/core/';
import {useGetMakeLoanRepayment} from '../../../hooks/useGetMakeLoanRepayment';
import {ScheduleWrapper, RepaymentWrapper, Text, TextLight, LoanDetailWrapper, Title} from './LoanDetails.styles';
import {Alert} from '../Alert/Alert';
import {LoanDetailsProps} from './LoanDetails.types';
import {LoanConfirm} from '../LoanConfirm/LoanConfirm';

export const LoanDetails: React.FC<LoanDetailsProps> = ({row, fetchUserLoans, page}) => {
    const {isFetchingGet, isErrorGet, fetchMakeLoanRepayment, setIsPaid, setIsErrorGet, isPaid} = useGetMakeLoanRepayment();

    async function handleMakeRepayment() {
        await fetchMakeLoanRepayment(row.id);
        fetchUserLoans('Bilbo_Baggins');
    }

    if (isFetchingGet) {
        return <CircularProgress />;
    }
    const handleCloseErrorAlert = () => {
        setIsErrorGet(false);
    };
    const handleCloseSuccessAlert = () => {
        setIsPaid(false);
    };

    return (
        <LoanDetailWrapper>
            {row.status === 'UNCONFIRMED' && page === 'borrowerUserLoans' && (
                <>
                    <Title>Confirm your loan</Title>
                    <LoanConfirm loanDetails={row} />
                </>
            )}
            {row.status === 'UNCONFIRMED' && page === 'lenderUserInvestments' && <Title>Your investment is unconfirmed</Title>}
            {row.status !== 'UNCONFIRMED' && (
                <>
                    <Title>Loan repayment details</Title>
                    {page === 'borrowerUserLoans' && (
                        <Button variant="outlined" onClick={handleMakeRepayment} disabled={row.status === 'REPAID'}>
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
                                <Text>{repayment.date}</Text>
                            </RepaymentWrapper>
                            <RepaymentWrapper>
                                <Text>{repayment.value} zł</Text>
                            </RepaymentWrapper>
                            <RepaymentWrapper>
                                <Text>{repayment.status}</Text>
                            </RepaymentWrapper>
                        </ScheduleWrapper>
                    ))}
                    <Snackbar open={isPaid} autoHideDuration={3000} onClose={handleCloseSuccessAlert} onClick={handleCloseSuccessAlert}>
                        <Alert severity="success">'Your payment was successful!'</Alert>
                    </Snackbar>
                    <Snackbar open={isErrorGet} autoHideDuration={3000} onClose={handleCloseErrorAlert} onClick={handleCloseErrorAlert}>
                        <Alert severity="error">'Error payment. Please try again.'</Alert>
                    </Snackbar>
                </>
            )}
        </LoanDetailWrapper>
    );
};

import React from 'react';
import {Button, CircularProgress, Snackbar} from '@material-ui/core/';
import {useGetMakeLoanRepayment} from '../../../hooks/useGetMakeLoanRepayment';
import {ScheduleWrapper, RepaymentWrapper, TextBold, TextLight, LoanDetailWrapper, Title} from './CollapseBox.styles';
import {Alert} from '../Alert/Alert';
import {CollapseBoxDisplayLoanDetailsProps} from './CollapseBoxDisplayLoanDetails.types';
import {LoanConfirm} from '../LoanConfirm/LoanConfirm';

export const CollapseBoxDisplayLoanDetails: React.FC<CollapseBoxDisplayLoanDetailsProps> = ({row, fetchUserLoans, page}) => {
    const {isFetchingGet, isErrorGet, fetchMakeLoanRepayment, setIsPaid, setIsErrorGet, isPaid} = useGetMakeLoanRepayment();

    async function handleMakeRepayment() {
        await fetchMakeLoanRepayment(row.id);
        fetchUserLoans('Bilbo_Baggins');
    }

    if (isFetchingGet) {
        return <CircularProgress />;
    }
    if (isPaid) {
        alert('Your payment was successfull!');
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
                    <Snackbar open={isPaid} autoHideDuration={3000} onClose={handleCloseSuccessAlert} onClick={handleCloseSuccessAlert}>
                        <Alert severity="success">'Your payment was successfull!'</Alert>
                    </Snackbar>
                    <Snackbar open={isErrorGet} autoHideDuration={3000} onClose={handleCloseErrorAlert} onClick={handleCloseErrorAlert}>
                        <Alert severity="error">'Error payment. Please try again.'</Alert>
                    </Snackbar>
                </>
            )}
        </LoanDetailWrapper>
    );
};

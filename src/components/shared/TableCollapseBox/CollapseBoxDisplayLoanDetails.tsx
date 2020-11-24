import React, {useState} from 'react';
import {Button, CircularProgress, Snackbar} from '@material-ui/core/';
import {useGetMakeLoanRepayment} from '../../../hooks/useGetMakeLoanRepayment';
import {ScheduleWrapper, RepaymentWrapper, TextBold, TextLight, LoanDetailWrapper, Title} from './CollapseBox.styles';
import {Alert} from '../Alert/Alert';
import {CollapseBoxDisplayLoanDetailsProps} from './CollapseBoxDisplayLoanDetails.types';
import {LoanConfirm} from '../LoanConfirm/LoanConfirm';

export const CollapseBoxDisplayLoanDetails: React.FC<CollapseBoxDisplayLoanDetailsProps> = ({row, fetchUserLoans, page}) => {
    const {isFetchingGet, isErrorGet, fetchMakeLoanRepayment, response} = useGetMakeLoanRepayment();
    const [open, setOpen] = useState<boolean>(false);

    async function handleMakeRepayment() {
        await fetchMakeLoanRepayment(row.id);
        fetchUserLoans('Bilbo_Baggins');
        await setOpen(true);
    }

    if (isFetchingGet) {
        return <CircularProgress />;
    }
    if (isErrorGet) {
        alert('Error');
    }
    return (
        <LoanDetailWrapper>
            {row.status === 'UNCONFIRMED' ? (
                <>
                    <Title>Confirm your loan</Title>
                    <LoanConfirm loanDetails={row} />
                </>
            ) : (
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
                    <Snackbar open={open} autoHideDuration={4000}>
                        <Alert onClose={() => setOpen(false)} severity="success">
                            {response ? 'Your payment was successfull!' : 'Something was wrong'}
                        </Alert>
                    </Snackbar>
                </>
            )}
        </LoanDetailWrapper>
    );
};

import React from 'react';
import {Button, CircularProgress} from '@material-ui/core/';
import {useGetMakeLoanRepayment} from '../../../hooks/api/loan/useGetMakeLoanRepayment';
import {ScheduleWrapper, RepaymentWrapper, Text, TextLight, LoanDetailWrapper, Title} from './LoanDetails.styles';
import {AlertSnackBar} from '../Alert/AlertSnackbar';
import {LoanDetailsProps} from './LoanDetails.types';
import {LoanConfirm} from '../LoanConfirm/LoanConfirm';
import {prepareAlertDetails} from '../Alert/Alert.helpers';
import {AlertTypeProps} from '../Alert/Alert.types';

export const LoanDetails: React.FC<LoanDetailsProps> = ({row, fetchUserLoans, page}) => {
    const {isFetchingGet, isErrorPaid, fetchMakeLoanRepayment, setIsPaid, setIsErrorPaid, isPaid} = useGetMakeLoanRepayment();

    async function handleMakeRepayment() {
        await fetchMakeLoanRepayment(row.id);
        fetchUserLoans('Bilbo_Baggins');
    }

    let alertDetails: AlertTypeProps = {};
    if (isErrorPaid) {
        alertDetails = prepareAlertDetails(setIsErrorPaid, 'error', isErrorPaid);
    } else if (isPaid) {
        alertDetails = prepareAlertDetails(setIsPaid, 'success', 'Your repayment was paid');
    }

    return (
        <LoanDetailWrapper>
            {row.status === 'UNCONFIRMED' && page === 'borrowerUserLoans' && (
                <>
                    <Title>Confirm your loan</Title>
                    <LoanConfirm loanDetails={row} fetchUserLoans={fetchUserLoans} page={page} />
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
                    {isFetchingGet ? (
                        <CircularProgress />
                    ) : (
                        row.schedule.map(repayment => (
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
                        ))
                    )}
                </>
            )}
            {alertDetails.alertType && (
                <AlertSnackBar
                    alertType={alertDetails.alertType}
                    alertText={alertDetails.alertText}
                    handleCloseAlert={alertDetails.handleCloseAlert}
                ></AlertSnackBar>
            )}
        </LoanDetailWrapper>
    );
};

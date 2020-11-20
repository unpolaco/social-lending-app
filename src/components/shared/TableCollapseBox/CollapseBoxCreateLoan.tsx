import React from 'react';
import {Typography, Box, Button, CircularProgress} from '@material-ui/core/';
import {useGetCreateLoan} from '../../../hooks/useGetCreateLoan';
import {useGetConfirmCreateLoan} from '../../../hooks/useGetConfirmCreateLoan';
import {FormikWrapper} from './CollapseBox.styles';
import {AuctionData} from '../Table/Table.types';
import {useHistory} from 'react-router-dom';
import {ROUTES} from '../../../helpers/routes';

interface CollapseBoxCreateLoanProps {
    row: AuctionData;
}

export const CollapseBoxCreateLoan: React.FC<CollapseBoxCreateLoanProps> = ({row}) => {
    const {isFetchingCreateLoan, isErrorCreateLoan, fetchCreateLoan, loanDetails} = useGetCreateLoan();
    const {isFetchingConfirmCreateLoan, isErrorConfirmCreateLoan, fetchConfirmCreateLoan} = useGetConfirmCreateLoan();
    const disabled = row.status === 'ACTIVE_COMPLETE' ? false : true;
    const history = useHistory();

    if (isFetchingCreateLoan || isFetchingConfirmCreateLoan) {
        return <CircularProgress />;
    }
    if (isErrorCreateLoan || isErrorConfirmCreateLoan) {
        alert('Error');
    }
    const auctionId: number = row.id;
    function handleCreateLoan() {
        fetchCreateLoan(auctionId);
    }
    function handleConfirmCreateLoan() {
        fetchConfirmCreateLoan(loanDetails.id);
        history.push(ROUTES.BORROWER_COMMITMENTS_LOANS);
    }
    return (
        <Box>
            <Typography>Make a loan or delete your auction</Typography>
            <Button variant="outlined" disabled>
                Delete
            </Button>
            <Button variant="outlined" onClick={handleCreateLoan} disabled={disabled}>
                Make loan
            </Button>
            {loanDetails && (
                <FormikWrapper>
                    <div>You are creating a loan with parameters above:</div>
                    <div>Amount {loanDetails.amount} zł</div>
                    <div>Duration {loanDetails.duration} months</div>
                    <div>Rate {loanDetails.rate} %</div>
                    <div>Start at {loanDetails.startDate}</div>
                    <Button onClick={handleConfirmCreateLoan}>CONFIRM</Button>
                </FormikWrapper>
            )}
        </Box>
    );
};

import React from 'react';
import {Typography, Box, Button, CircularProgress} from '@material-ui/core/';
import {AuctionTableBoxOffer} from '../AuctionTableBoxOffer/AuctionTableBoxOffer';
import {useGetCreateLoan} from '../../../hooks/useGetCreateLoan';
import {useGetConfirmCreateLoan} from '../../../hooks/useGetConfirmCreateLoan';

export const CollapseBoxBorrowerUserAuctions: React.FC<any> = ({row}) => {
    const {isFetchingCreateLoan, isErrorCreateLoan, fetchCreateLoan, loanDetails} = useGetCreateLoan();
    const {isFetchingConfirmCreateLoan, isErrorConfirmCreateLoan, fetchConfirmCreateLoan} = useGetConfirmCreateLoan();

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
    }

    return (
        <Box>
            <AuctionTableBoxOffer row={row} />
            <Typography>Edit or delete your auction</Typography>
            <Button variant="outlined" disabled>
                Edit
            </Button>
            <Button variant="outlined" disabled>
                Delete
            </Button>
            <Button variant="outlined" onClick={handleCreateLoan}>
                Make loan
            </Button>
            {loanDetails && (
                <>
                    <div>You are creating a loan with parameters above:</div>
                    <div>Amount {loanDetails.amount} zł</div>
                    <div>Duration {loanDetails.duration} months</div>
                    <div>Rate {loanDetails.rate} %</div>
                    <div>Start at {loanDetails.startDate}</div>
                    <Button onClick={handleConfirmCreateLoan}>CONFIRM</Button>
                </>
            )}
        </Box>
    );
};

import React from 'react';
import {Typography, Box, Button, CircularProgress} from '@material-ui/core/';
import {useGetCreateLoan} from '../../../hooks/useGetCreateLoan';
import {useDeleteAuction} from '../../../hooks/useDeleteAuction';
import {LoanConfirm} from '../LoanConfirm/LoanConfirm';

export const LoanCreate: React.FC<any> = ({row, fetchUserAuctions}) => {
    const {isFetchingCreateLoan, isErrorCreateLoan, fetchCreateLoan, loanDetails} = useGetCreateLoan();
    const {isFetchingDelete, isErrorDelete, fetchDeleteAuction} = useDeleteAuction();
    const disabled = row.status !== 'ACTIVE_COMPLETE';
    const auctionId: number = row.id;
    const userName = row.borrower;

    if (isFetchingCreateLoan || isFetchingDelete) {
        return <CircularProgress />;
    }
    if (isErrorCreateLoan || isErrorDelete) {
        alert('Error');
    }
    function handleCreateLoan() {
        fetchCreateLoan(auctionId);
    }
    async function handleDeleteAuction() {
        await fetchDeleteAuction(auctionId);
        fetchUserAuctions(userName);
    }

    return (
        <Box>
            {row.status === 'ARCHIVED' ? (
                <Typography>This auction is archived.</Typography>
            ) : (
                <>
                    <Typography>Make a loan or delete your auction</Typography>
                    <Button variant="outlined" onClick={handleDeleteAuction} disabled={isFetchingDelete}>
                        Delete
                    </Button>
                    <Button variant="outlined" onClick={handleCreateLoan} disabled={disabled}>
                        Make loan
                    </Button>
                    {loanDetails && <LoanConfirm loanDetails={loanDetails} />}
                </>
            )}
        </Box>
    );
};

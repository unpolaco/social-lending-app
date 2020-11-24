import React from 'react';
import {Typography, Box, Button, CircularProgress} from '@material-ui/core/';
import {useGetCreateLoan} from '../../../hooks/useGetCreateLoan';
import {CollapseBoxCreateLoanProps} from './CollapseBoxCreateLoan.types';
import {LoanConfirm} from '../LoanConfirm/LoanConfirm';

export const CollapseBoxCreateLoan: React.FC<CollapseBoxCreateLoanProps> = ({row}) => {
    const {isFetchingCreateLoan, isErrorCreateLoan, fetchCreateLoan, loanDetails} = useGetCreateLoan();
    const disabled = row.status === 'ACTIVE_COMPLETE' ? false : true;

    if (isFetchingCreateLoan) {
        return <CircularProgress />;
    }
    if (isErrorCreateLoan) {
        alert('Error');
    }
    const auctionId: number = row.id;
    function handleCreateLoan() {
        fetchCreateLoan(auctionId);
    }

    return (
        <Box>
            {row.status === 'ARCHIVED' ? (
                <Typography>This auction is archived.</Typography>
            ) : (
                <>
                    <Typography>Make a loan or delete your auction</Typography>
                    <Button variant="outlined" disabled>
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

import React from 'react';
import {Typography, Box, Button, CircularProgress} from '@material-ui/core/';
import {AuctionTableBoxOffer} from '../AuctionTableBoxOffer/AuctionTableBoxOffer';
import {useSaveCreateLoan} from '../../../hooks/useSaveCreateLoan';

export const CollapseBoxBorrowerUserAuctions: React.FC<any> = ({row}) => {
    const {isFetchingSave, isErrorSave, fetchCreateLoan} = useSaveCreateLoan();

    if (isFetchingSave) {
        return <CircularProgress />;
    }
    if (isErrorSave) {
        alert('Error');
    }
    const auctionId: number = row.id;
    function handleCreateLoan() {
        fetchCreateLoan(auctionId);
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
        </Box>
    );
};

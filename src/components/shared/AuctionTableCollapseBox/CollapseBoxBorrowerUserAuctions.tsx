import React from 'react';
import {Typography, Box, Button} from '@material-ui/core/';
import {AuctionTableBoxOffer} from '../AuctionTableBoxOffer/AuctionTableBoxOffer';

export const CollapseBoxBorrowerUserAuctions: React.FC<any> = ({row}) => {
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
            <Button variant="outlined">Make loan</Button>
        </Box>
    );
};

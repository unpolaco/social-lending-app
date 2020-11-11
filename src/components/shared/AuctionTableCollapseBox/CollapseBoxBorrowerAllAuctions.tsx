import React from 'react';
import {Box} from '@material-ui/core/';
import {AuctionTableBoxOffer} from '../AuctionTableBoxOffer/AuctionTableBoxOffer';

export const CollapseBoxBorrowerAllAuctions: React.FC<any> = ({row}) => {
    return (
        <Box>
            <AuctionTableBoxOffer row={row} />
        </Box>
    );
};

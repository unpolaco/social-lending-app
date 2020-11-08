import React from 'react';
import {Typography, Box, Avatar} from '@material-ui/core/';

export const CollapseBoxBorrowerAllAuctions: React.FC<any> = ({row}) => {
    return (
        <Box>
            <Typography>Auction details</Typography>
            {[row.offers].map((offer: any) => (
                <Box key={offer.offerId}>
                    <Avatar>{offer.lenderUserName}</Avatar>
                    <Typography>{offer.amount} zł</Typography>
                    <Typography>{offer.rate} %</Typography>
                </Box>
            ))}
        </Box>
    );
};

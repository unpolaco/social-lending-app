import React from 'react';
import {Avatar, Grid, Typography} from '@material-ui/core/';
import {AvatarGroup} from '@material-ui/lab';
import {BoxFlexRow, BoxNarrow, AuctionCardWrapper} from './AuctionCard.styles';

export const AuctionCard: React.FC<any> = ({auction}) => {
    const {amount, auctionDuration, auctionStartDate, borrower, rate} = auction;

    return (
        <AuctionCardWrapper>
            <Grid container alignItems="center" justify="space-between">
                <BoxFlexRow>
                    <Avatar sizes="60">MB</Avatar>
                    <Typography variant="h6">{borrower}</Typography>
                </BoxFlexRow>
                <BoxNarrow>
                    <Typography variant="body2">auction amount</Typography>
                    <Typography variant="h4">{amount}zł</Typography>
                </BoxNarrow>
                <BoxNarrow>
                    <Typography variant="body2">rate</Typography>
                    <Typography variant="h4">{rate}%</Typography>
                </BoxNarrow>
                <BoxNarrow>
                    <Typography variant="body2">loan start</Typography>
                    <Typography>{auctionStartDate}</Typography>
                </BoxNarrow>
                <BoxNarrow>
                    <Typography variant="body2">duration</Typography>
                    <Typography>{auctionDuration} months</Typography>
                </BoxNarrow>
                <BoxNarrow>
                    <Typography variant="body2">offers</Typography>
                    <AvatarGroup max={3}>
                        <Avatar>BF</Avatar>
                        <Avatar>BS</Avatar>
                    </AvatarGroup>
                </BoxNarrow>
            </Grid>
        </AuctionCardWrapper>
    );
};

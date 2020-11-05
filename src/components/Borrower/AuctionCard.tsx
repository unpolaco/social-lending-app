import React from 'react';
import {Avatar, Grid, Typography} from '@material-ui/core/';
import {AvatarGroup} from '@material-ui/lab';
import {BoxFlexRow, BoxNarrow, AuctionCardWrapper} from './AuctionCard.styles';
export const AuctionCard = () => {
    return (
        <AuctionCardWrapper elevation={3}>
            <Grid container alignItems="center" justify="space-between">
                <BoxFlexRow>
                    <Avatar sizes="60">MB</Avatar>
                    <Typography>Michał Borowski</Typography>
                </BoxFlexRow>
                <BoxNarrow>
                    <Typography variant="body2">auction amount</Typography>
                    <Typography variant="h4">500zł</Typography>
                </BoxNarrow>
                <BoxNarrow>
                    <Typography variant="body2">rate</Typography>
                    <Typography variant="h4">5%</Typography>
                </BoxNarrow>
                <BoxNarrow>
                    <Typography variant="body2">loan start</Typography>
                    <Typography>12 01 2021</Typography>
                </BoxNarrow>
                <BoxNarrow>
                    <Typography variant="body2">duration</Typography>
                    <Typography>3 months</Typography>
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

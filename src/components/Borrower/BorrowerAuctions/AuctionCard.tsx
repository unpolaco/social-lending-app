import React from 'react';
import {Avatar, Grid, Typography} from '@material-ui/core/';
import {AvatarGroup} from '@material-ui/lab';
import {BoxFlexRow, BoxNarrow, AuctionCardWrapper} from './AuctionCard.styles';
export const AuctionCard: React.FC<any> = ({auction}) => {
    const {amount, auctionDuration, auctionStartDate, borrower, borrowerRating, id, offers, rate} = auction;

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

// {
//     "amount": 0,
//     "auctionDuration": 0,
//     "auctionStartDate": "2020-11-06",
//     "borrower": "string",
//     "borrowerRating": 0,
//     "id": 0,
//     "loanDuration": 0,
//     "loanStartDate": "2020-11-06",
//     "offers": [
//       {
//         "amount": 0,
//         "auctionId": 0,
//         "lenderUserName": "string",
//         "offerId": 0,
//         "rate": 0
//       }
//     ],
//     "rate": 0,
//     "status": "string"
//   }

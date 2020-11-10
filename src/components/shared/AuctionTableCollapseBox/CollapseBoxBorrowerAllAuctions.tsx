import React from 'react';
import {Typography, Box} from '@material-ui/core/';
import {StyledBox, OffersWrapper} from './CollapseBoxBorrowerAllAuctions.styles';

export const CollapseBoxBorrowerAllAuctions: React.FC<any> = ({row}) => {
    return (
        <Box>
            <Typography>Auction offers</Typography>
            <OffersWrapper>
                {row.offers.length > 0 &&
                    row.offers.map((offer: any) => (
                        <StyledBox key={offer.offerId}>
                            <Typography>{offer.lenderUserName}</Typography>
                            <Typography>{offer.amount} zł</Typography>
                            <Typography>{offer.rate} %</Typography>
                        </StyledBox>
                    ))}
            </OffersWrapper>
        </Box>
    );
};

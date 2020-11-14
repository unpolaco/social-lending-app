import React from 'react';
import {AuctionData} from '../Table/Table.types';
import {Typography, Box} from '@material-ui/core/';
import {OffersWrapper, StyledBox} from './CollapseBox.styles';

interface CollapseBoxAuctionOffersProps {
    row: AuctionData;
}

export const CollapseBoxAuctionOffers: React.FC<CollapseBoxAuctionOffersProps> = ({row}) => {
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

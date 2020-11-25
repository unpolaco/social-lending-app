import React from 'react';
import {Typography, Box} from '@material-ui/core/';
import {OffersWrapper, StyledBox, Text} from './OffersDisplay.styles';
import {OffersDisplayProps} from './OffersDisplay.types';

export const OffersDisplay: React.FC<OffersDisplayProps> = ({row}) => {
    return (
        <Box>
            <Typography>Auction offers</Typography>
            <OffersWrapper>
                {row.offers.length > 0 &&
                    row.offers.map((offer: any) => (
                        <StyledBox key={offer.offerId}>
                            <Text>{offer.lenderUserName}</Text>
                            <Text>{offer.amount} zł</Text>
                            <Text>{offer.rate} %</Text>
                        </StyledBox>
                    ))}
            </OffersWrapper>
        </Box>
    );
};

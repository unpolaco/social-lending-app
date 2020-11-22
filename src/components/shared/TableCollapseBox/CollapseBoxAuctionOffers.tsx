import React from 'react';
import {AuctionData} from '../Table/Table.types';
import {Typography, Box, Tooltip} from '@material-ui/core/';
import {OffersWrapper, StyledBox, Text} from './CollapseBox.styles';
import {IconAllowDivision} from '../../../assets/IconAllowDivision';

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
                            <Text>{offer.lenderUserName}</Text>
                            <Text>{offer.amount} zł</Text>
                            <Text>{offer.rate} %</Text>
                            <Text>
                                {offer.allowAmountSplit ? (
                                    <Tooltip title="Allowed division of offer amount" enterDelay={500} leaveDelay={200}>
                                        <span>
                                            <IconAllowDivision color="#7e8a96" />
                                        </span>
                                    </Tooltip>
                                ) : (
                                    <Tooltip title="Not allowed division of offer amount" enterDelay={500} leaveDelay={200}>
                                        <span>
                                            <IconAllowDivision color="#333333" />
                                        </span>
                                    </Tooltip>
                                )}
                            </Text>
                        </StyledBox>
                    ))}
            </OffersWrapper>
        </Box>
    );
};

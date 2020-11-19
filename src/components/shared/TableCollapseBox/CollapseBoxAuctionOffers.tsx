import React from 'react';
import {AuctionData} from '../Table/Table.types';
import {Typography, Box, Tooltip} from '@material-ui/core/';
import {OffersWrapper, StyledBox} from './CollapseBox.styles';
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
                            <Typography>{offer.lenderUserName}</Typography>
                            <Typography>{offer.amount} zł</Typography>
                            <Typography>{offer.rate} %</Typography>
                            <Typography>
                                {offer.allowAmountSplit ? (
                                    <Tooltip title="Allow divide amount" enterDelay={500} leaveDelay={200}>
                                        <IconAllowDivision color="#7e8a96" />
                                    </Tooltip>
                                ) : (
                                    <Tooltip title="Allow divide amount" enterDelay={500} leaveDelay={200}>
                                        <IconAllowDivision color="#EA2027" />
                                    </Tooltip>
                                )}
                            </Typography>
                        </StyledBox>
                    ))}
            </OffersWrapper>
        </Box>
    );
};

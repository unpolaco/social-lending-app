import React from 'react';
import {Typography} from '@material-ui/core/';
import {OffersWrapper, StyledBox} from './AuctionTableBoxOffer.styles';

export const AuctionTableBoxOffer: React.FC<any> = ({row}) => {
    return (
        <>
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
        </>
    );
};

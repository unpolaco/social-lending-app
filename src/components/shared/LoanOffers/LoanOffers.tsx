import React from 'react';
import {Typography, Box} from '@material-ui/core/';
import {OffersWrapper, StyledBox, Text} from './LoanOffers.styles';

export const LoanOffers: React.FC<any> = ({row}) => {
    return (
        <Box>
            <Typography>Best offers</Typography>
            <OffersWrapper>
                {row.investments.length > 0 &&
                    row.investments.map((investment: any) => (
                        <StyledBox key={investment.investmentId}>
                            <Text>Lender {investment.lenderName}</Text>
                            <Text>Borrow amount {investment.loanAmount} zł</Text>
                            <Text>Return amount {investment.returnAmount} zł</Text>
                        </StyledBox>
                    ))}
            </OffersWrapper>
        </Box>
    );
};

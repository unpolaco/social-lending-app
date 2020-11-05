import styled from '@emotion/styled';
import {Box, Card} from '@material-ui/core/';

export const AuctionCardWrapper = styled(Card)`
    width: 90%;
    padding: 0 15px;
`;
export const BoxFlexRow = styled(Box)`
    display: flex;
    flex: 2;
    padding: 8px;
    height: 100px;
    align-items: center;
    justify-content: space-between;
`;
export const BoxNarrow = styled(Box)`
    border-left: 1px solid #a4b0be;
    display: flex;
    flex-direction: column;
    padding: 8px;
    height: 60px;
    align-items: flex-end;
    justify-content: space-between;
    flex: 1;
`;

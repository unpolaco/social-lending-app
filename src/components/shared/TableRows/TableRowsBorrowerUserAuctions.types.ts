import {AuctionDto} from '../../../../src/api/api.types';

export interface TableRowsBorrowerUserAuctionsProps {
    row: AuctionDto;
    clickedCollapsed: number | null;
}

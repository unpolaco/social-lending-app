import {AuctionDto} from '../../../../src/api/api.types';

export interface TableRowsBorrowerAllAuctionsProps {
    row: AuctionDto;
    clickedCollapsed: number | null;
}

import {AuctionDto} from '../../../../src/api/api.types';

export interface TableRowsLenderAllAuctionsProps {
    row: AuctionDto;
    clickedCollapsed: number | null;
}

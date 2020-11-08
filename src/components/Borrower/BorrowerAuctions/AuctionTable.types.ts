import {useStyles} from './AuctionTable.styles';
export interface AuctionData {
    id: number;
    borrower: string;
    amount: number;
    auctionDuration: string;
    auctionStartDate: string;
    borrowerRating: number;
}
export interface HeadCell {
    id: keyof AuctionData;
    label: string;
}
export type Order = 'asc' | 'desc';
export interface EnhancedTableProps {
    classes: ReturnType<typeof useStyles>;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof AuctionData) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
}

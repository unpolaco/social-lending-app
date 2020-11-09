export interface AuctionData {
    id: number;
    borrower: string;
    amount: number;
    rate: number;
    auctionDuration: string;
    auctionStartDate: string;
    borrowerRating: number;
    offers: any;
}
export interface HeadCell {
    id: keyof AuctionData;
    label: string;
}
export type Order = 'asc' | 'desc';
export interface EnhancedTableProps {
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof AuctionData) => void;
    order: Order;
    orderBy: string;
}

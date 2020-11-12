export type Order = 'asc' | 'desc';
export interface AuctionData {
    id: number;
    borrower: string;
    amount: number;
    rate: number;
    auctionDuration: string;
    auctionStartDate: string;
    loanStartDate: string;
    borrowerRating: number;
    offers: any;
    status: string;
}
export interface LoanData {
    amount: number;
    borrowerUserName: string;
    duration: string;
    id: number;
    investments: any;
    rate: number;
    repayment: number;
    startDate: string;
    status: string;
}
export interface HeadCellsAuctions {
    id: keyof AuctionData;
    label: string;
}
export interface HeadCellsLoans {
    id: keyof LoanData;
    label: string;
}
export interface AuctionTableProps {
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof AuctionData) => void;
    order: Order;
    orderBy: string;
}
export interface LoanTableProps {
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof LoanData) => void;
    order: Order;
    orderBy: string;
}

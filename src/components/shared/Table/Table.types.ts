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
export interface OfferData {
    amount: number;
    id: number;
    rate: number;
    status: string;
}
export interface InvestmentsData {
    amount: number;
    id: number;
    rate: number;
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
export interface HeadCellsOffers {
    id: keyof OfferData;
    label: string;
}
export interface HeadCellsInvestments {
    id: keyof InvestmentsData;
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
export interface OfferTableProps {
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof OfferData) => void;
    order: Order;
    orderBy: string;
}
export interface InvestmentsTableProps {
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof InvestmentsData) => void;
    order: Order;
    orderBy: string;
}

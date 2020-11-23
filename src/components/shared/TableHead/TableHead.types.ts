import {Auction, Loan, Offer, Investment} from '../../../helpers/types';
import {Order} from '../Table/Table.types';

export interface AuctionTableProps {
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Auction) => void;
    order: Order;
    orderBy: string;
}
export interface LoanTableProps {
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Loan) => void;
    order: Order;
    orderBy: string;
}
export interface OfferTableProps {
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Offer) => void;
    order: Order;
    orderBy: string;
}
export interface InvestmentTableProps {
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Investment) => void;
    order: Order;
    orderBy: string;
}
export interface HeadCellsAuctions {
    id: keyof Auction;
    label: string;
}
export interface HeadCellsLoans {
    id: keyof Loan;
    label: string;
}
export interface HeadCellsOffers {
    id: keyof Offer;
    label: string;
}
export interface HeadCellsInvestments {
    id: keyof Investment;
    label: string;
}

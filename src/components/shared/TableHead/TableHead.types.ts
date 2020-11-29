import {AuctionDto, LoanDto, OfferDto, InvestmentDto} from '../../../../src/api/api.types';
import {Order} from '../Table/Table.types';

export interface AuctionTableProps {
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof AuctionDto) => void;
    order: Order;
    orderBy: string;
}
export interface LoanTableProps {
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof LoanDto) => void;
    order: Order;
    orderBy: string;
}
export interface OfferTableProps {
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof OfferDto) => void;
    order: Order;
    orderBy: string;
}
export interface InvestmentTableProps {
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof InvestmentDto) => void;
    order: Order;
    orderBy: string;
}
export interface HeadCellsAuctions {
    id: keyof AuctionDto;
    label: string;
}
export interface HeadCellsLoans {
    id: keyof LoanDto;
    label: string;
}
export interface HeadCellsOffers {
    id: keyof OfferDto;
    label: string;
}
export interface HeadCellsInvestments {
    id: keyof InvestmentDto;
    label: string;
}

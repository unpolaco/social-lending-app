import {HeadCellsAuctions, HeadCellsLoans, HeadCellsOffers, HeadCellsInvestments} from './TableHead.types';

export const headCellsAllAuctions: HeadCellsAuctions[] = [
    {id: 'borrowerRating', label: 'rating'},
    {id: 'amount', label: 'amount'},
    {id: 'rate', label: 'rate'},
    {id: 'loanDuration', label: 'duration'},
    {id: 'status', label: 'status'},
];
export const headCellsUserAuctions: HeadCellsAuctions[] = [
    {id: 'amount', label: 'amount'},
    {id: 'rate', label: 'rate'},
    {id: 'loanDuration', label: 'duration'},
    {id: 'status', label: 'status'},
];
export const headCellsLoans: HeadCellsLoans[] = [
    {id: 'amount', label: 'amount'},
    {id: 'rate', label: 'rate'},
    {id: 'duration', label: 'duration'},
    {id: 'status', label: 'status'},
];
export const headCellsOffers: HeadCellsOffers[] = [
    {id: 'amount', label: 'amount'},
    {id: 'rate', label: 'rate'},
    {id: 'status', label: 'status'},
];
export const headCellsInvestments: HeadCellsInvestments[] = [
    {id: 'borrowerName', label: 'borrower'},
    {id: 'loanAmount', label: 'amount'},
    {id: 'rate', label: 'rate'},
    {id: 'duration', label: 'duration'},
    {id: 'status', label: 'status'},
];

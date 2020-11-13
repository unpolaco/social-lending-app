import {HeadCellsAuctions, HeadCellsLoans, HeadCellsOffers} from '../Table/Table.types';

export const headCellsAuctions: HeadCellsAuctions[] = [
    {id: 'borrower', label: 'borrower name'},
    // {id: 'borrowerRating', label: 'borrower rating'},
    {id: 'amount', label: 'amount'},
    {id: 'rate', label: 'desired rate'},
    {id: 'auctionDuration', label: 'duration'},
    {id: 'auctionStartDate', label: 'auction start date'},
    {id: 'loanStartDate', label: 'loan start date'},
    {id: 'status', label: 'status'},
];

export const headCellsLoans: HeadCellsLoans[] = [
    {id: 'amount', label: 'amount'},
    {id: 'rate', label: 'rate'},
    {id: 'startDate', label: 'start date'},
    {id: 'duration', label: 'duration'},
    {id: 'status', label: 'loan status'},
];
export const headCellsOffers: HeadCellsOffers[] = [
    {id: 'amount', label: 'amount'},
    {id: 'rate', label: 'rate'},
    {id: 'status', label: 'loan status'},
];

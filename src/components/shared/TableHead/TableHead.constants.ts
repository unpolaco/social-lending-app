import {HeadCellsAuctions, HeadCellsLoans} from '../Table/Table.types';

export const headCellsAuctions: HeadCellsAuctions[] = [
    {id: 'borrower', label: 'borrower name'},
    {id: 'borrowerRating', label: 'borrower rating'},
    {id: 'amount', label: 'amount'},
    {id: 'rate', label: 'desired rate'},
    {id: 'auctionDuration', label: 'auction duration'},
    {id: 'auctionStartDate', label: 'auction start date'},
];

export const headCellsLoans: HeadCellsLoans[] = [
    {id: 'startDate', label: 'start date'},
    {id: 'amount', label: 'amount'},
    {id: 'rate', label: 'rate'},
    {id: 'duration', label: 'duration'},
    {id: 'status', label: 'loan status'},
];

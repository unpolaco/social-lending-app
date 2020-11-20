import {HeadCellsAuctions, HeadCellsLoans, HeadCellsOffers, HeadCellsInvestments} from '../Table/Table.types';

export const headCellsAllAuctions: HeadCellsAuctions[] = [
    {id: 'borrower', label: 'user name'},
    {id: 'borrowerRating', label: 'rating'},
    {id: 'amount', label: 'amount'},
    {id: 'rate', label: 'rate'},
    {id: 'auctionDuration', label: 'duration'},
    {id: 'status', label: 'status'},
];
export const headCellsUserAuctions: HeadCellsAuctions[] = [
    {id: 'amount', label: 'amount'},
    {id: 'rate', label: 'rate'},
    {id: 'auctionDuration', label: 'duration'},
    {id: 'status', label: 'status'},
];
export const headCellsLoans: HeadCellsLoans[] = [
    {id: 'amount', label: 'amount'},
    {id: 'rate', label: 'rate'},
    {id: 'startDate', label: 'start date'},
    {id: 'duration', label: 'duration'},
    {id: 'status', label: 'status'},
];
export const headCellsOffers: HeadCellsOffers[] = [
    {id: 'amount', label: 'amount'},
    {id: 'rate', label: 'rate'},
    {id: 'status', label: 'status'},
];
export const headCellsInvestments: HeadCellsInvestments[] = [
    {id: 'amount', label: 'amount'},
    {id: 'rate', label: 'rate'},
    {id: 'status', label: 'status'},
];

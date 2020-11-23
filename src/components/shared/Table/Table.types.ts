import {Auction, Loan, Offer, Investment} from '../../../helpers/types';

export type Order = 'asc' | 'desc';

export interface TableProps {
    rows: any;
    currentPage: string;
    handleSaveNewOffer?: any;
    fetchUserLoans?: any;
}

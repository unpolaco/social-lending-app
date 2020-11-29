import {NewOfferForm} from '../../../api/api.types';
export type Order = 'asc' | 'desc';

export interface TableProps {
    rows: any;
    currentPage: string;
    handleSaveNewOffer?: (values: NewOfferForm) => void;
    fetchUserLoans?: (userId: string) => void;
    fetchUserAuctions?: (userId: string) => void;
    fetchUserOffers?: (userId: string) => void;
}

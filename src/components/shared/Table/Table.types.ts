export type Order = 'asc' | 'desc';

export interface TableProps {
    rows: any;
    currentPage: string;
    handleSaveNewOffer?: any;
    fetchUserLoans?: any;
    fetchUserAuctions?: any;
}

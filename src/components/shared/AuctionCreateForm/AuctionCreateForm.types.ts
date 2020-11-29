export interface AuctionCreateFormValues {
    borrower?: string;
    amount?: number | undefined;
    rate?: number | undefined;
    loanDuration?: number;
}
export interface AuctionCreateFormProps {
    handleSaveNewAuction: (values: AuctionCreateFormValues) => void;
}

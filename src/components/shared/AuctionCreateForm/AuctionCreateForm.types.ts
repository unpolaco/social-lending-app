export interface AuctionCreateFormValues {
    amount: number | string;
    rate: number | string;
    loanDuration: number;
    auctionStartDate?: string;
    loanStartDate: string;
}

export interface apiSaveNewAuctionDto {
    amount: number;
    borrower: string;
    loanDuration: number;
    loanStartDate: string;
    rate: number;
}
export interface apiSaveNewOfferDto {
    amount: number;
    rate: number;
}
export interface apiPaymentDto {
    userName: string;
    amount: number;
}

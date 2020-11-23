export interface AuctionDto {
    amount: number;
    borrower: string;
    borrowerRating: number;
    id: number;
    loanDuration: number;
    offers: OfferDto[];
    rate: number;
    risk: number;
    status: string;
}
export interface NewAuctionDto {
    amount: number;
    borrower: string;
    loanDuration: number;
    rate: number;
    auctionId: number;
}
export interface OfferDto {
    amount: number;
    borrowerName: string;
    lenderUserName: string;
    borrowerRating: number;
    offerId: number;
    loanDuration: number;
    rate: number;
    risk: number;
    status: string;
}
export interface NewOfferDto {
    amount: number;
    rate: number;
}
export interface LoanDto {
    amount: number;
    borrowerName: string;
    duration: number;
    investmentId: number;
    lenderName: string;
    schedule: ScheduleDto[];
    loanDuration: number;
    rate: number;
    id: number;
    risk: number;
    status: string;
}
export interface InvestmentDto {
    amount: number;
    borrowerName: string;
    duration: number;
    investmentId: number;
    lenderName: string;
    schedule: ScheduleDto[];
    loanDuration: number;
    rate: number;
    risk: number;
    status: string;
}
export interface ScheduleDto {
    date: string;
    status: string;
    value: number;
}
export interface AccountDto {
    accountBalance: number;
    email: string;
    hasLinkedBankAccount: boolean;
    name: string;
    phoneNumber: string;
    surname: string;
    userName: string;
}
export interface PaymentDto {
    amount: number;
    userName: string;
}

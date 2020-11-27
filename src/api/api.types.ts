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
export interface NewOfferDto {
    amount: number;
    rate: number;
}
export interface ScheduleDto {
    date: string;
    status: string;
    value: number;
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
    loanAmount: number;
    returnAmount: number;
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
export interface AccountDto {
    accountBalance: number;
    email: string;
    hasLinkedBankAccount: boolean;
    name: string;
    phoneNumber: string;
    surname: string;
    userName: string;
}
export interface PublicAccountDto {
    email: string;
    name: string;
    surname: string;
    totalRating: number;
    opinions: OpinionsDto[];
}
export interface OpinionsDto {
    author: string;
    opinionText: string;
    opinionRating: number;
    investmentId: number;
}
export interface PaymentDto {
    amount: number;
    userName: string;
}
// export interface PaymentForm {
//     amount: number;
//     userName: string;
// }
//

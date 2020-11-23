export interface Auction {
    amount: number;
    borrower: string;
    borrowerRating: number;
    id: number;
    loanDuration: number;
    offers: Offer[];
    rate: number;
    risk: number;
    status: string;
}
export interface Offer {
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
export interface Loan {
    amount: number;
    borrowerName: string;
    duration: number;
    investmentId: number;
    lenderName: string;
    schedule: Schedule[];
    loanDuration: number;
    rate: number;
    id: number;
    risk: number;
    status: string;
}
export interface Investment {
    amount: number;
    borrowerName: string;
    duration: number;
    investmentId: number;
    lenderName: string;
    schedule: Schedule[];
    loanDuration: number;
    rate: number;
    risk: number;
    status: string;
}
export interface Schedule {
    date: string;
    status: string;
    value: number;
}

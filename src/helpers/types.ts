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
    id: number;
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
    loanAmount: number;
    returnAmount: number;
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
export interface PublicAccount {
    email: string;
    totalRating: number;
    opinions: Opinions[];
}
export interface Opinions {
    author: string;
    opinionText: string;
    opinionRating: number;
}

import {Loan} from '../../../helpers/types';

export interface LoanDetailsProps {
    row: Loan;
    page: string;
    fetchUserLoans?: any;
}

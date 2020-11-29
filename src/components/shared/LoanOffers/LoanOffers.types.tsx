import {LoanDto} from '../../../../src/api/api.types';

export interface LoanDetailsProps {
    row: LoanDto;
    page: string;
    fetchUserLoans?: any;
}

import {LoanDto} from '../../../../src/api/api.types';

export interface TableRowsBorrowerUserLoansProps {
    row: LoanDto;
    clickedCollapsed: number | null;
}

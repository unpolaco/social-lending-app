import {LoanDto} from '../../../../src/api/api.types';

export interface LoanCreateProps {
    row: LoanDto;
    fetchUserAuctions: any;
}

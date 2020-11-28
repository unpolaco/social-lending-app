import {InvestmentDto} from '../../../../src/api/api.types';

export interface TableRowsLenderUserInvestmentsProps {
    row: InvestmentDto;
    clickedCollapsed: number | null;
}

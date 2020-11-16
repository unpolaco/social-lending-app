import React from 'react';
import {TextBold, NarrowCell} from './TableRows.styles';
import {Typography} from '@material-ui/core';
import {LoanData} from '../Table/Table.types';

interface TableRowsBorrowerUserLoansProps {
    row: LoanData;
}

export const TableRowsBorrowerUserLoans: React.FC<TableRowsBorrowerUserLoansProps> = ({row}) => {
    return (
        <>
            <NarrowCell align="right">
                <TextBold>{row.amount} zł</TextBold>
            </NarrowCell>
            <NarrowCell align="right">{row.rate}%</NarrowCell>
            <NarrowCell align="right">{row.duration} months</NarrowCell>
            <NarrowCell align="right">
                <Typography>Loan start date:</Typography>
                <TextBold>{row.startDate}</TextBold>
            </NarrowCell>
            <NarrowCell align="right">{row.status}</NarrowCell>
        </>
    );
};

import React from 'react';
import {TextBold, NarrowCell} from './TableRows.styles';
import {Typography} from '@material-ui/core';
import {LoanData} from '../Table/Table.types';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {IconButton} from '@material-ui/core';

interface TableRowsBorrowerUserLoansProps {
    row: LoanData;
    clickedCollapsed: number | null;
}

export const TableRowsBorrowerUserLoans: React.FC<TableRowsBorrowerUserLoansProps> = ({row, clickedCollapsed}) => {
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
            <NarrowCell>
                <IconButton aria-label="expand row" size="small">
                    {clickedCollapsed === row.id ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
            </NarrowCell>
        </>
    );
};

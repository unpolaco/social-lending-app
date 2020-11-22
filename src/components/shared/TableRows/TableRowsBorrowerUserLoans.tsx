import React from 'react';
import {Text, NarrowCell, StatusIcon} from './TableRows.styles';
import {Tooltip} from '@material-ui/core';
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
                <Text>{row.amount} zł</Text>
            </NarrowCell>
            <NarrowCell align="right">
                <Text>{row.rate}%</Text>
            </NarrowCell>
            <NarrowCell align="right">
                <Text>{row.duration} months</Text>
            </NarrowCell>
            <NarrowCell align="right">
                <Text>{row.startDate}</Text>
            </NarrowCell>
            <NarrowCell align="right">
                <Tooltip title={row.status} enterDelay={500} leaveDelay={200}>
                    <StatusIcon color={row.status} />
                </Tooltip>
            </NarrowCell>
            <NarrowCell>
                <IconButton aria-label="expand row" size="small">
                    {clickedCollapsed === row.id ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
            </NarrowCell>
        </>
    );
};

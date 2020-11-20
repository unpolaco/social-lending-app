import React from 'react';
import {TextBold, NarrowCell, WideCell, StyledBox} from './TableRows.styles';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {IconButton} from '@material-ui/core';

interface TableRowsLenderUserInvestmentsProps {
    borrowerName: string;
    amount: number;
    rate: number;
    duration: number;
    status: string;
    clickedCollapsed: number | null;
}

export const TableRowsLenderUserInvestments: React.FC<any> = ({row, clickedCollapsed}) => {
    return (
        <>
            <NarrowCell align="right">{row.borrowerName}</NarrowCell>
            <NarrowCell align="right">
                <TextBold>{row.amount} zł</TextBold>
            </NarrowCell>
            <NarrowCell align="right">{row.rate}%</NarrowCell>
            <NarrowCell align="right">{row.duration}</NarrowCell>
            <NarrowCell align="right">{row.status}</NarrowCell>
            <NarrowCell>
                <IconButton aria-label="expand row" size="small">
                    {clickedCollapsed === row.id ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
            </NarrowCell>
        </>
    );
};

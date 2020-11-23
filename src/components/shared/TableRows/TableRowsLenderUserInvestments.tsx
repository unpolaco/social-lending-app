import React from 'react';
import {Text, NarrowCell, StatusIcon} from './TableRows.styles';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {IconButton, Tooltip} from '@material-ui/core';
import {TableRowsLenderUserInvestmentsProps} from './TableRowsLenderUserInvestments.types';

export const TableRowsLenderUserInvestments: React.FC<TableRowsLenderUserInvestmentsProps> = ({row, clickedCollapsed}) => {
    return (
        <>
            <NarrowCell align="right">
                <Text>{row.borrowerName}</Text>
            </NarrowCell>
            <NarrowCell align="right">
                <Text>{row.amount} zł</Text>
            </NarrowCell>
            <NarrowCell align="right">
                <Text>{row.rate}%</Text>
            </NarrowCell>
            <NarrowCell align="right">
                <Text>{row.duration}</Text>
            </NarrowCell>
            <NarrowCell align="right">
                <Tooltip title={row.status} enterDelay={500} leaveDelay={200}>
                    <StatusIcon color={row.status} />
                </Tooltip>
            </NarrowCell>
            <NarrowCell>
                <IconButton aria-label="expand row" size="small">
                    {clickedCollapsed === row.investmentId ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
            </NarrowCell>
        </>
    );
};

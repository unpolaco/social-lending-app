import React from 'react';
import {Text, WideCell, NarrowCell, StyledBox, StatusIcon} from './TableRows.styles';
import {IconButton, Tooltip} from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {Rating} from '@material-ui/lab';
import {TableRowsLenderAllAuctionsProps} from './TableRowsLenderAllAuctions.types';

export const TableRowsLenderAllAuctions: React.FC<TableRowsLenderAllAuctionsProps> = ({row, clickedCollapsed}) => {
    return (
        <>
            <WideCell>
                <StyledBox>
                    <Text>{row.borrower}</Text>
                    <Rating size="small" value={+row.borrowerRating} readOnly />
                </StyledBox>
            </WideCell>
            <NarrowCell align="right">
                <Text>{row.amount} zł</Text>
            </NarrowCell>
            <NarrowCell align="right">
                <Text>{row.rate}%</Text>
            </NarrowCell>
            <NarrowCell align="right">
                <Text>{row.loanDuration} months</Text>
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

import React from 'react';
import {Text, WideCell, NarrowCell, StyledBox, StatusIcon} from './TableRows.styles';
import {IconButton, Tooltip} from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {Rating} from '@material-ui/lab';
import {TableRowsBorrowerAllAuctionsProps} from './TableRowsBorrowerAllAuctions.types';

export const TableRowsBorrowerAllAuctions: React.FC<TableRowsBorrowerAllAuctionsProps> = ({row, clickedCollapsed}) => {
    return (
        <>
            <WideCell>
                <Tooltip title="Rating of a user in 1-5 scale" enterDelay={500} leaveDelay={200}>
                    <StyledBox>
                        <Text>{row.borrower}</Text>
                        <Rating size="small" value={+row.borrowerRating} readOnly />
                    </StyledBox>
                </Tooltip>
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

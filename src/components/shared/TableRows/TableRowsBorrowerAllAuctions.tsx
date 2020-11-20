import React from 'react';
import {TextBold, WideCell, NarrowCell, StyledBox, StatusIcon} from './TableRows.styles';
import {Typography, IconButton, Tooltip} from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {Rating} from '@material-ui/lab';
import {AuctionData} from '../Table/Table.types';

interface TableRowsBorrowerAllAuctionsProps {
    row: AuctionData;
    clickedCollapsed: number | null;
}

export const TableRowsBorrowerAllAuctions: React.FC<TableRowsBorrowerAllAuctionsProps> = ({row, clickedCollapsed}) => {
    return (
        <>
            <WideCell>
                <Tooltip title="Rating of a user in 1-5 scale" enterDelay={500} leaveDelay={200}>
                    <StyledBox>
                        <TextBold>{row.borrower}</TextBold>
                        <Rating size="small" value={+row.borrowerRating} readOnly />
                    </StyledBox>
                </Tooltip>
            </WideCell>
            <NarrowCell align="right">
                <TextBold>{row.amount} zł</TextBold>
            </NarrowCell>
            <NarrowCell align="right">{row.rate}%</NarrowCell>
            <NarrowCell align="right">{row.auctionDuration} months</NarrowCell>
            <NarrowCell align="right">
                <Typography>Auction start date:</Typography>
                <TextBold>{row.auctionStartDate}</TextBold>
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

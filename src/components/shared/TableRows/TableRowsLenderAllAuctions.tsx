import React from 'react';
import {TextBold, WideCell, NarrowCell, StyledBox} from './TableRows.styles';
import {Typography, IconButton} from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {Rating} from '@material-ui/lab';
import {AuctionData} from '../Table/Table.types';

interface TableRowsLenderAllAuctionsProps {
    row: AuctionData;
    clickedCollapsed: number | null;
}
export const TableRowsLenderAllAuctions: React.FC<TableRowsLenderAllAuctionsProps> = ({row, clickedCollapsed}) => {
    return (
        <>
            <WideCell>
                <StyledBox>
                    <TextBold>{row.borrower}</TextBold>
                    <Rating size="small" value={+row.borrowerRating} readOnly />
                </StyledBox>
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
                <Typography>Loan start date:</Typography>
                <TextBold>{row.loanStartDate}</TextBold>
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

import React from 'react';
import {TextBold, StyledTableRow, WideCell, NarrowCell, StyledBox, CollapsedCell} from './AuctionTable.styles';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TablePagination,
    TableRow,
    Paper,
    Avatar,
    Collapse,
    IconButton,
} from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {Rating} from '@material-ui/lab';
import {AuctionData, Order} from './AuctionTable.types';
import {getComparator, stableSort} from './AuctionTable.helpers';
import {AuctionTableHead} from '../AuctionTableHead/AuctionTableHead';
import {CollapseBoxLender} from '../AuctionTableCollapseBox/CollapseBoxLender';
import {CollapseBoxBorrowerAllAuctions} from '../AuctionTableCollapseBox/CollapseBoxBorrowerAllAuctions';
import {CollapseBoxBorrowerUserAuctions} from '../AuctionTableCollapseBox/CollapseBoxBorrowerUserAuctions';

export const AuctionTable: React.FC<any> = ({auctionsList, lender, borrowerAllAuctions, borrowerUserAuctions, handleSaveNewOffer}) => {
    const rows = auctionsList;
    const rowsPerPage = 5;
    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<keyof AuctionData>('borrower');
    const [page, setPage] = React.useState(0);
    const [clickedCollapsed, setClickedCollapsed] = React.useState<any>(null);

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
    const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof AuctionData) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };
    const handleChangePage = (event: unknown, newPage: number) => setPage(newPage);
    const handleClickCollapsed = (id: number | string) => {
        if (clickedCollapsed === id) setClickedCollapsed(null);
        else setClickedCollapsed(id);
    };
    return (
        <Paper>
            <TableContainer>
                <Table>
                    <AuctionTableHead order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />
                    <TableBody>
                        {stableSort(rows, getComparator(order, orderBy))
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => (
                                <>
                                    <StyledTableRow role="checkbox" tabIndex={-1} key={row.id} onClick={() => handleClickCollapsed(row.id)}>
                                        <WideCell>
                                            <Avatar sizes="60">MB</Avatar>
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
                                        <NarrowCell align="right">{row.auctionStartDate}</NarrowCell>
                                        <NarrowCell>
                                            <IconButton aria-label="expand row" size="small">
                                                {clickedCollapsed === row.id ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                            </IconButton>
                                        </NarrowCell>
                                    </StyledTableRow>
                                    <TableRow>
                                        <CollapsedCell colSpan={7}>
                                            <Collapse in={clickedCollapsed === row.id} timeout="auto" unmountOnExit>
                                                {lender && (
                                                    <CollapseBoxLender
                                                        borrowerAmount={row.amount}
                                                        borrowerRate={row.rate}
                                                        handleSaveNewOffer={handleSaveNewOffer}
                                                        auctionId={row.id}
                                                    />
                                                )}
                                                {borrowerAllAuctions && <CollapseBoxBorrowerAllAuctions row={row} />}
                                                {borrowerUserAuctions && <CollapseBoxBorrowerUserAuctions row={row} />}
                                            </Collapse>
                                        </CollapsedCell>
                                    </TableRow>
                                </>
                            ))}
                        {emptyRows > 0 && (
                            <TableRow style={{height: 53 * emptyRows}}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination count={rows.length} rowsPerPage={rowsPerPage} page={page} onChangePage={handleChangePage} />
        </Paper>
    );
};

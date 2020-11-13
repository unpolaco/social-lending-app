import React from 'react';
import {StyledTableRow, CollapsedCell} from './Table.styles';
import {Table as MaterialTable, TableBody, TableCell, TableContainer, TablePagination, TableRow, Paper, Collapse} from '@material-ui/core';
import {AuctionData, LoanData, Order} from './Table.types';
import {getComparator, stableSort} from './Table.helpers';
import {LoanTableHead} from '../TableHead/LoanTableHead';
import {AuctionsTableHead} from '../TableHead/AuctionsTableHead';
import {TableHeadLenderUserOffers} from '../TableHead/TableHeadLenderUserOffers';
import {CollapseBoxLender} from '../TableCollapseBox/CollapseBoxLender';
import {CollapseBoxBorrowerAllAuctions} from '../TableCollapseBox/CollapseBoxBorrowerAllAuctions';
import {CollapseBoxBorrowerUserAuctions} from '../TableCollapseBox/CollapseBoxBorrowerUserAuctions';
import {TableBodyBorrowerAllAuctions} from './TableBody/TableBodyBorrowerAllAuctions';
import {TableBodyBorrowerUserAuctions} from './TableBody/TableBodyBorrowerUserAuctions';
import {TableBodyBorrowerUserLoans} from './TableBody/TableBodyBorrowerUserLoans';
import {TableBodyLenderAllAuctions} from './TableBody/TableBodyLenderAllAuctions';
import {TableBodyLenderUserInvestments} from './TableBody/TableBodyLenderUserInvestments';
import {TableBodyLenderUserOffers} from './TableBody/TableBodyLenderUserOffers';

export const Table: React.FC<any> = ({rows, currentPage, handleSaveNewOffer}) => {
    const rowsPerPage = 10;
    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<keyof AuctionData | keyof LoanData>('status');
    const [page, setPage] = React.useState(0);
    const [clickedCollapsed, setClickedCollapsed] = React.useState<any>(null);

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
    const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof AuctionData | keyof LoanData) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };
    const handleChangePage = (event: unknown, newPage: number) => setPage(newPage);
    const handleClickCollapse = (id: number | string) => {
        if (clickedCollapsed === id) setClickedCollapsed(null);
        else setClickedCollapsed(id);
    };
    return (
        <Paper>
            <TableContainer>
                <MaterialTable>
                    {(currentPage === 'borrowerAllAuctions' || currentPage === 'lenderAllAuctions') && (
                        <AuctionsTableHead order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />
                    )}
                    {(currentPage === 'borrowerUserAuctions' || currentPage === 'lenderUserLoans') && (
                        <LoanTableHead order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />
                    )}
                    {(currentPage === 'lenderUserOffers' || currentPage === 'lenderUserInvestments') && (
                        <TableHeadLenderUserOffers order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />
                    )}

                    <TableBody>
                        {stableSort(rows, getComparator(order, orderBy))
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => (
                                <>
                                    <StyledTableRow role="checkbox" tabIndex={-1} key={row.id} onClick={() => handleClickCollapse(row.id)}>
                                        {currentPage === 'borrowerAllAuctions' && (
                                            <TableBodyBorrowerAllAuctions row={row} clickedCollapsed={clickedCollapsed} />
                                        )}
                                        {currentPage === 'borrowerUserAuctions' && (
                                            <TableBodyBorrowerUserAuctions row={row} clickedCollapsed={clickedCollapsed} />
                                        )}
                                        {currentPage === 'borrowerUserLoans' && (
                                            <TableBodyBorrowerUserLoans row={row} clickedCollapsed={clickedCollapsed} />
                                        )}
                                        {currentPage === 'lenderAllAuctions' && (
                                            <TableBodyLenderAllAuctions row={row} clickedCollapsed={clickedCollapsed} />
                                        )}
                                        {currentPage === 'lenderUserInvestments' && (
                                            <TableBodyLenderUserInvestments row={row} clickedCollapsed={clickedCollapsed} />
                                        )}
                                        {currentPage === 'lenderUserOffers' && (
                                            <TableBodyLenderUserOffers row={row} clickedCollapsed={clickedCollapsed} />
                                        )}
                                    </StyledTableRow>
                                    <TableRow>
                                        <CollapsedCell colSpan={7}>
                                            <Collapse in={clickedCollapsed === row.id} timeout="auto" unmountOnExit>
                                                {currentPage === 'lenderAllAuctions' && (
                                                    <CollapseBoxLender
                                                        borrowerAmount={row.amount}
                                                        borrowerRate={row.rate}
                                                        handleSaveNewOffer={handleSaveNewOffer}
                                                        auctionId={row.id}
                                                    />
                                                )}
                                                {currentPage === 'borrowerAllAuctions' && <CollapseBoxBorrowerAllAuctions row={row} />}
                                                {currentPage === 'borrowerUserAuctions' && <CollapseBoxBorrowerUserAuctions row={row} />}
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
                </MaterialTable>
            </TableContainer>
            <TablePagination count={rows.length} rowsPerPage={rowsPerPage} page={page} onChangePage={handleChangePage} />
        </Paper>
    );
};

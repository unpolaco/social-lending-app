import React, {useState} from 'react';
import {Table as MaterialTable, TableBody, TableCell, TableContainer, TablePagination, TableRow, Paper} from '@material-ui/core';
import {AuctionData, LoanData, Order} from './Table.types';
import {getComparator, stableSort} from './Table.helpers';
import {TableHeadAllAuctions} from '../TableHead/TableHeadAllAuctions';
import {TableRows} from '../TableRows/TableRows';
import {TableHeadUserInvestments} from '../TableHead/TableHeadUserInvestments';
import {TableHeadUserAuctions} from '../TableHead/TableHeadUserAuctions';
import {TableHeadUserOffers} from '../TableHead/TableHeadUserOffers';
import {TableHeadUserLoans} from '../TableHead/TableHeadUserLoans';

interface TableProps {
    rows: any;
    currentPage: string;
    handleSaveNewOffer?: any;
    fetchUserLoans?: any;
}

export const Table: React.FC<TableProps> = ({rows, currentPage, handleSaveNewOffer, fetchUserLoans}) => {
    const rowsPerPage = 10;
    const [order, setOrder] = useState<Order>('asc');
    const [orderBy, setOrderBy] = useState<keyof AuctionData | keyof LoanData>('status');
    const [page, setPage] = useState(0);

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
    const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof AuctionData | keyof LoanData) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };
    const handleChangePage = (event: unknown, newPage: number) => setPage(newPage);

    return (
        <Paper>
            <TableContainer>
                <MaterialTable>
                    {(() => {
                        switch (currentPage) {
                            case 'borrowerAllAuctions' || 'lenderAllAuctions':
                                return <TableHeadAllAuctions order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />;
                            case 'borrowerUserAuctions':
                                return <TableHeadUserAuctions order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />;
                            case 'borrowerUserLoans':
                                return <TableHeadUserLoans order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />;
                            case 'lenderUserInvestments':
                                return <TableHeadUserInvestments order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />;
                            case 'lenderUserOffers':
                                return <TableHeadUserOffers order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />;
                        }
                    })()}
                    <TableBody>
                        {stableSort(rows, getComparator(order, orderBy))
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => (
                                <TableRows
                                    row={row}
                                    currentPage={currentPage}
                                    handleSaveNewOffer={handleSaveNewOffer}
                                    fetchUserLoans={fetchUserLoans}
                                />
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

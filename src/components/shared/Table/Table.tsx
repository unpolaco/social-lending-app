import React, {useState} from 'react';
import {Table as MaterialTable, TableBody, TableContainer, TablePagination, TableRow, Paper} from '@material-ui/core';
import {AuctionDto, LoanDto, OfferDto} from '../../../../src/api/api.types';
import {Order, TableProps} from './Table.types';
import {getComparator, stableSort} from './Table.helpers';
import {TableHeadAllAuctions} from '../TableHead/TableHeadAllAuctions';
import {TableRows} from '../TableRows/TableRows';
import {TableHeadUserInvestments} from '../TableHead/TableHeadUserInvestments';
import {TableHeadUserAuctions} from '../TableHead/TableHeadUserAuctions';
import {TableHeadUserOffers} from '../TableHead/TableHeadUserOffers';
import {TableHeadUserLoans} from '../TableHead/TableHeadUserLoans';

export const Table: React.FC<TableProps> = ({
    rows,
    currentPage,
    handleSaveNewOffer,
    fetchUserLoans,
    fetchUserAuctions,
    fetchUserOffers,
}) => {
    const rowsPerPage = 10;
    const [order, setOrder] = useState<Order>('asc');
    const [orderBy, setOrderBy] = useState<keyof AuctionDto | keyof LoanDto | keyof OfferDto>('status');
    const [page, setPage] = useState(0);

    const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof AuctionDto | keyof LoanDto | keyof OfferDto) => {
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
                            case 'borrowerAllAuctions':
                                return <TableHeadAllAuctions order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />;
                            case 'borrowerUserAuctions':
                                return <TableHeadUserAuctions order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />;
                            case 'borrowerUserLoans':
                                return <TableHeadUserLoans order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />;
                            case 'lenderAllAuctions':
                                return <TableHeadAllAuctions order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />;
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
                                    key={index}
                                    row={row}
                                    currentPage={currentPage}
                                    handleSaveNewOffer={handleSaveNewOffer}
                                    fetchUserLoans={fetchUserLoans}
                                    fetchUserAuctions={fetchUserAuctions}
                                    fetchUserOffers={fetchUserOffers}
                                />
                            ))}
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[]}
                                count={rows.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onChangePage={handleChangePage}
                            />
                        </TableRow>
                    </TableBody>
                </MaterialTable>
            </TableContainer>
        </Paper>
    );
};

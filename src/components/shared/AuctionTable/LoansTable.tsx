import React from 'react';
import {TextBold, StyledTableRow, NarrowCell} from './Table.styles';
import {Table, TableBody, TableCell, TableContainer, TablePagination, TableRow, Typography, Paper} from '@material-ui/core';
import {LoanData, Order} from './Table.types';
import {getComparator, stableSort} from './Table.helpers';
import {LoanTableHead} from '../AuctionTableHead/LoanTableHead';

export const LoansTable: React.FC<any> = ({userLoansList}) => {
    const rows = userLoansList;
    const rowsPerPage = 10;
    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<keyof LoanData>('startDate');
    const [page, setPage] = React.useState(0);

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
    const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof LoanData) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };
    const handleChangePage = (event: unknown, newPage: number) => setPage(newPage);

    return (
        <Paper>
            <TableContainer>
                <Table>
                    <LoanTableHead order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />
                    <TableBody>
                        {stableSort(rows, getComparator(order, orderBy))
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => (
                                <StyledTableRow role="checkbox" tabIndex={-1} key={row.id}>
                                    <NarrowCell align="right">
                                        <TextBold>{row.amount} zł</TextBold>
                                    </NarrowCell>
                                    <NarrowCell align="right">{row.rate}%</NarrowCell>
                                    <NarrowCell align="right">{row.duration} months</NarrowCell>
                                    <NarrowCell align="right">
                                        <Typography>Loan start date:</Typography>
                                        <TextBold>{row.startDate}</TextBold>
                                    </NarrowCell>
                                    <NarrowCell align="right">{row.status}</NarrowCell>
                                </StyledTableRow>
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

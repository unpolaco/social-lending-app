import React from 'react';
import {TextBold, StyledTableRow} from './AuctionTable.styles';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TablePagination,
    TableRow,
    Paper,
    Avatar,
    Typography,
    Button,
    Box,
    Collapse,
    IconButton,
} from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {Rating} from '@material-ui/lab';
import {AuctionData, Order} from './AuctionTable.types';
import {getComparator, stableSort} from './AuctionTable.helpers';
import {AuctionTableHead} from '../AuctionTableHead/AuctionTableHead';

export const AuctionTable: React.FC<any> = ({auctionsList, lender, borrowerAllAuctions, borrowerUserAuctions}) => {
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
                                        <TableCell>
                                            <IconButton aria-label="expand row" size="small">
                                                {clickedCollapsed === row.id ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                            </IconButton>
                                        </TableCell>
                                        <TableCell>
                                            <Avatar sizes="60">MB</Avatar>
                                        </TableCell>
                                        <TableCell scope="row">
                                            <TextBold>{row.borrower}</TextBold>
                                            <Rating size="small" value={+row.borrowerRating} readOnly />
                                        </TableCell>
                                        <TableCell align="right">
                                            <TextBold>{row.amount} zł</TextBold>
                                        </TableCell>
                                        <TableCell align="right">{row.rate}%</TableCell>
                                        <TableCell align="right">{row.auctionDuration} months</TableCell>
                                        <TableCell align="right">{row.auctionStartDate}</TableCell>
                                    </StyledTableRow>
                                    {lender && (
                                        <Collapse in={clickedCollapsed === row.id} timeout="auto" unmountOnExit>
                                            <Box>
                                                <Typography>Create an offer for this auction</Typography>
                                                <Button variant="outlined">Create offer</Button>
                                            </Box>
                                        </Collapse>
                                    )}
                                    {borrowerAllAuctions && (
                                        <TableRow>
                                            <TableCell>
                                                <Collapse in={clickedCollapsed === row.id} timeout="auto" unmountOnExit>
                                                    <Box>
                                                        <Typography>Auction details</Typography>
                                                        {[row.offers].map((offer: any) => (
                                                            <Box key={offer.offerId}>
                                                                <Avatar>{offer.lenderUserName}</Avatar>
                                                                <Typography>{offer.amount} zł</Typography>
                                                                <Typography>{offer.rate} %</Typography>
                                                            </Box>
                                                        ))}
                                                    </Box>
                                                </Collapse>
                                            </TableCell>
                                        </TableRow>
                                    )}
                                    {borrowerUserAuctions && (
                                        <Collapse in={clickedCollapsed === row.id} timeout="auto" unmountOnExit>
                                            <Box>
                                                <Typography>Edit or delete your auction</Typography>
                                                <Button variant="outlined" disabled>
                                                    Edit
                                                </Button>
                                                <Button variant="outlined" disabled>
                                                    Delete
                                                </Button>
                                            </Box>
                                        </Collapse>
                                    )}
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

import React from 'react';
import {useStyles, TextBold, StyledTableRow} from './AuctionTable.styles';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    TableSortLabel,
    Paper,
    Avatar,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Rating} from '@material-ui/lab';
import {AuctionData, HeadCell, EnhancedTableProps, Order} from './AuctionTable.types';
import {getComparator, stableSort} from './AuctionTable.helpers';

const headCells: HeadCell[] = [
    {id: 'borrower', label: 'borrower name'},
    {id: 'borrowerRating', label: 'borrower rating'},
    {id: 'amount', label: 'amount'},
    {id: 'rate', label: 'desired rate'},
    {id: 'auctionDuration', label: 'auction duration'},
    {id: 'auctionStartDate', label: 'auction start date'},
];

function EnhancedTableHead(props: EnhancedTableProps) {
    const {classes, order, orderBy, onRequestSort} = props;
    const createSortHandler = (property: keyof AuctionData) => (event: React.MouseEvent<unknown>) => {
        onRequestSort(event, property);
    };
    return (
        <TableHead>
            <TableRow>
                {headCells.map(headCell => (
                    <TableCell key={headCell.id} sortDirection={orderBy === headCell.id ? order : false}>
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <span className={classes.visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </span>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

export const AuctionTable: React.FC<any> = ({auctionsList, lender, borrowerAllAuctions, borrowerUserAuctions}) => {
    const rows = auctionsList;
    const rowsPerPage = 5;
    const classes = useStyles();
    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<keyof AuctionData>('borrower');
    const [page, setPage] = React.useState(0);

    const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof AuctionData) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <TableContainer>
                    <Table className={classes.table} aria-labelledby="tableTitle" size="medium" aria-label="enhanced table">
                        <EnhancedTableHead
                            classes={classes}
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {stableSort(rows, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    return (
                                        <StyledTableRow role="checkbox" tabIndex={-1} key={row.id}>
                                            <Accordion>
                                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                                    <TableCell>
                                                        <Avatar sizes="60">MB</Avatar>
                                                    </TableCell>
                                                    <TableCell component="th" scope="row">
                                                        <TextBold>{row.borrower}</TextBold>
                                                        <Rating size="small" value={+row.borrowerRating} readOnly />
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        <TextBold>{row.amount} zł</TextBold>
                                                    </TableCell>
                                                    <TableCell align="right">{row.rate}%</TableCell>
                                                    <TableCell align="right">{row.auctionDuration} months</TableCell>
                                                    <TableCell align="right">{row.auctionStartDate}</TableCell>
                                                </AccordionSummary>
                                                {lender && (
                                                    <AccordionDetails>
                                                        <Typography>Create an offer for this auction</Typography>
                                                    </AccordionDetails>
                                                )}
                                                {borrowerAllAuctions && (
                                                    <AccordionDetails>
                                                        <Typography>Auction details</Typography>
                                                    </AccordionDetails>
                                                )}
                                                {borrowerUserAuctions && (
                                                    <AccordionDetails>
                                                        <Typography>Edit or delete your auction</Typography>
                                                    </AccordionDetails>
                                                )}
                                            </Accordion>
                                        </StyledTableRow>
                                    );
                                })}
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
        </div>
    );
};

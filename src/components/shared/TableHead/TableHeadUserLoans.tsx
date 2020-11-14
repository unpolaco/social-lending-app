import React from 'react';
import {HiddenSpan} from './TableHead.styles';
import {TableCell, TableHead, TableRow, TableSortLabel} from '@material-ui/core';
import {LoanData, LoanTableProps} from '../Table/Table.types';
import {headCellsLoans} from './TableHead.constants';

export const TableHeadUserLoans: React.FC<LoanTableProps> = ({order, orderBy, onRequestSort}) => {
    const createSortHandler = (property: keyof LoanData) => (event: React.MouseEvent<unknown>) => {
        onRequestSort(event, property);
    };
    return (
        <TableHead>
            <TableRow>
                {headCellsLoans.map(headCell => (
                    <TableCell key={headCell.id} sortDirection={orderBy === headCell.id ? order : false}>
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <HiddenSpan>{order === 'desc' ? 'sorted descending' : 'sorted ascending'}</HiddenSpan>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
};

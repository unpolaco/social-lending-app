import React from 'react';
import {HiddenSpan} from './AuctionTableHead.styles';
import {TableCell, TableHead, TableRow, TableSortLabel} from '@material-ui/core';
import {AuctionData, EnhancedTableProps} from '../AuctionTable/AuctionTable.types';
import {headCells} from './AuctionTableHead.constants';

export const AuctionTableHead: React.FC<EnhancedTableProps> = ({order, orderBy, onRequestSort}) => {
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
                                <HiddenSpan>{order === 'desc' ? 'sorted descending' : 'sorted ascending'}</HiddenSpan>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
};

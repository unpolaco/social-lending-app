import React from 'react';
import {HiddenSpan} from './TableHead.styles';
import {TableCell, TableHead, TableRow, TableSortLabel} from '@material-ui/core';
import {OfferData, OfferTableProps} from '../Table/Table.types';
import {headCellsOffers} from './TableHead.constants';

export const TableHeadUserOffers: React.FC<OfferTableProps> = ({order, orderBy, onRequestSort}) => {
    const createSortHandler = (property: keyof OfferData) => (event: React.MouseEvent<unknown>) => {
        onRequestSort(event, property);
    };
    return (
        <TableHead>
            <TableRow>
                {headCellsOffers.map(headCell => (
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

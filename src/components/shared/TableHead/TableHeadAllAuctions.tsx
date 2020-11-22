import React from 'react';
import {HiddenSpan, NarrowCell, TextHead, TextHeadCell} from './TableHead.styles';
import {TableHead, TableRow, TableSortLabel} from '@material-ui/core';
import {AuctionData, AuctionTableProps} from '../Table/Table.types';
import {headCellsAllAuctions} from './TableHead.constants';

export const TableHeadAllAuctions: React.FC<AuctionTableProps> = ({order, orderBy, onRequestSort}) => {
    const createSortHandler = (property: keyof AuctionData) => (event: React.MouseEvent<unknown>) => {
        onRequestSort(event, property);
    };
    return (
        <TableHead>
            <TableRow>
                {headCellsAllAuctions.map(headCell => (
                    <NarrowCell align="right">
                        <TextHeadCell key={headCell.id} sortDirection={orderBy === headCell.id ? order : false}>
                            <TableSortLabel
                                active={orderBy === headCell.id}
                                direction={orderBy === headCell.id ? order : 'asc'}
                                onClick={createSortHandler(headCell.id)}
                            >
                                <TextHead>{headCell.label}</TextHead>
                                {orderBy === headCell.id ? (
                                    <HiddenSpan>{order === 'desc' ? 'sorted descending' : 'sorted ascending'}</HiddenSpan>
                                ) : null}
                            </TableSortLabel>
                        </TextHeadCell>
                    </NarrowCell>
                ))}
            </TableRow>
        </TableHead>
    );
};

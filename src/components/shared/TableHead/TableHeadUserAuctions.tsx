import React from 'react';
import {HiddenSpan, TextHead, TextHeadCell} from './TableHead.styles';
import {TableHead, TableRow, TableSortLabel} from '@material-ui/core';
import {AuctionTableProps} from './TableHead.types';
import {AuctionDto} from '../../../../src/api/api.types';
import {headCellsUserAuctions} from './TableHead.constants';

export const TableHeadUserAuctions: React.FC<AuctionTableProps> = ({order, orderBy, onRequestSort}) => {
    const createSortHandler = (property: keyof AuctionDto) => (event: React.MouseEvent<unknown>) => {
        onRequestSort(event, property);
    };
    return (
        <TableHead>
            <TableRow>
                {headCellsUserAuctions.map(headCell => (
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
                ))}
            </TableRow>
        </TableHead>
    );
};

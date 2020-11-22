import React from 'react';
import {Text, NarrowCell, StatusIcon} from './TableRows.styles';
import {OfferData} from '../Table/Table.types';
import {Tooltip} from '@material-ui/core';

interface TableRowsLenderUserOffersProps {
    row: OfferData;
}

export const TableRowsLenderUserOffers: React.FC<TableRowsLenderUserOffersProps> = ({row}) => {
    return (
        <>
            <NarrowCell align="right">
                <Text>{row.amount} zł</Text>
            </NarrowCell>
            <NarrowCell align="right">
                <Text>{row.rate}%</Text>
            </NarrowCell>
            <NarrowCell align="right">
                <Tooltip title={row.status} enterDelay={500} leaveDelay={200}>
                    <StatusIcon color={row.status} />
                </Tooltip>
            </NarrowCell>
        </>
    );
};

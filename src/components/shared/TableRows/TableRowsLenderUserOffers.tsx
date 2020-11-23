import React from 'react';
import {Text, NarrowCell, StatusIcon} from './TableRows.styles';
import {Tooltip} from '@material-ui/core';
import {TableRowsLenderUserOffersProps} from './TableRowsLenderUserOffers.types';

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

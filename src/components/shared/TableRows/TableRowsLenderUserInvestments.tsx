import React from 'react';
import {TextBold, NarrowCell} from './TableRows.styles';
import {AuctionData} from '../Table/Table.types';

interface TableRowsLenderUserInvestmentsProps {
    row: AuctionData;
}

export const TableRowsLenderUserInvestments: React.FC<TableRowsLenderUserInvestmentsProps> = ({row}) => {
    return (
        <>
            <NarrowCell align="right">
                <TextBold>{row.amount} zł</TextBold>
            </NarrowCell>
            <NarrowCell align="right">{row.rate}%</NarrowCell>
            <NarrowCell align="right">{row.status}</NarrowCell>
        </>
    );
};

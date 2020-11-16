import React from 'react';
import {TextBold, NarrowCell} from './TableRows.styles';
import {OfferData} from '../Table/Table.types';

interface TableRowsLenderUserOffersProps {
    row: OfferData;
}

export const TableRowsLenderUserOffers: React.FC<TableRowsLenderUserOffersProps> = ({row}) => {
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

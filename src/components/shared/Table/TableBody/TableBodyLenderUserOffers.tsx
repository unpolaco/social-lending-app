import React from 'react';
import {TextBold, NarrowCell} from './TableBody.styles';

export const TableBodyLenderUserOffers: React.FC<any> = ({row}) => {
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

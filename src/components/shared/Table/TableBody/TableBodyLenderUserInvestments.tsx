import React from 'react';
import {TextBold, NarrowCell} from './TableBody.styles';

export const TableBodyLenderUserInvestments: React.FC<any> = ({row}) => {
    return (
        <>
            <NarrowCell align="right">
                <TextBold>{row.value} zł</TextBold>
            </NarrowCell>
            <NarrowCell align="right">{row.rate}%</NarrowCell>
            <NarrowCell align="right">{row.status}</NarrowCell>
        </>
    );
};

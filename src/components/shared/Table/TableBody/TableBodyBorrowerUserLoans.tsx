import React from 'react';
import {TextBold, NarrowCell} from './TableBody.styles';
import {Typography} from '@material-ui/core';

export const TableBodyBorrowerUserLoans: React.FC<any> = ({row}) => {
    return (
        <>
            <NarrowCell align="right">
                <TextBold>{row.amount} zł</TextBold>
            </NarrowCell>
            <NarrowCell align="right">{row.rate}%</NarrowCell>
            <NarrowCell align="right">{row.duration} months</NarrowCell>
            <NarrowCell align="right">
                <Typography>Loan start date:</Typography>
                <TextBold>{row.startDate}</TextBold>
            </NarrowCell>
            <NarrowCell align="right">{row.status}</NarrowCell>
        </>
    );
};

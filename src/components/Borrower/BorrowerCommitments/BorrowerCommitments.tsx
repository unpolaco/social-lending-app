import React from 'react';
import {Paper, Typography, Tabs, Tab} from '@material-ui/core/';

export const BorrowerCommitments = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            <Paper elevation={3}>
                <Typography align="center" variant="h6">
                    Welcome to your Auctions & Loans
                </Typography>
                <Typography align="center" variant="subtitle2">
                    Here you can find list of your auctions and loans and manage them
                </Typography>
            </Paper>
            <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" centered>
                <Tab label="My auctions" />
                <Tab label="My loans" />
            </Tabs>
        </>
    );
};

import React from 'react';
import {Paper, Typography, Tabs, Tab} from '@material-ui/core/';

export const LenderPortfolio = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            <Paper elevation={3}>
                <Typography align="center" variant="h6">
                    Welcome to your Portfolio
                </Typography>
                <Typography align="center" variant="subtitle2">
                    Here you can find list of your offers and investments and manage them
                </Typography>
            </Paper>
            <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" centered>
                <Tab label="My offers" />
                <Tab label="My investments" />
            </Tabs>
        </>
    );
};

import React from 'react';
import {Typography, Tabs, Tab} from '@material-ui/core/';

export const LenderPortfolio = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            <Typography align="center" variant="h6">
                Welcome to your Portfolio
            </Typography>
            <Typography align="center" variant="subtitle2">
                Here you can find list of your offers and investments and manage them
            </Typography>
            <Tabs value={value} onChange={handleChange} centered>
                <Tab label="My offers" />
                <Tab label="My investments" />
            </Tabs>
        </>
    );
};

import React, {useEffect} from 'react';
import {Paper, Typography, Tabs, Tab, CircularProgress} from '@material-ui/core/';
import {useGetUserAuctions} from '../../../hooks/useGetUserAuctions';
import {AuctionTable} from '../../shared/AuctionTable/AuctionTable';

export const BorrowerCommitments = () => {
    const [value, setValue] = React.useState(0);
    const {isFetchingGet, isErrorGet, fetchUserAuctions, userAuctionsList} = useGetUserAuctions();

    useEffect(() => {
        fetchUserAuctions('testBorrower1');
    }, [fetchUserAuctions]);

    if (isFetchingGet) {
        return <CircularProgress />;
    }
    if (isErrorGet) {
        alert('Error');
    }

    const handleChange = (event: React.ChangeEvent<any>, newValue: number) => {
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
            <Tabs value={value} onChange={handleChange} centered>
                <Tab label="My auctions" />
                <Tab label="My loans" />
            </Tabs>
            {userAuctionsList && <AuctionTable auctionsList={userAuctionsList} borrowerUserAuctions />}
        </>
    );
};

import React, {useEffect} from 'react';
import {Paper, Typography, Tabs, Tab, CircularProgress} from '@material-ui/core/';
import {useGetUserAuctions} from '../../../hooks/useGetUserAuctions';
import {AuctionTable} from '../../shared/AuctionTable/AuctionTable';
import {ROUTES} from '../../../helpers/routes';
import {NavLink, Route, Switch, Redirect} from 'react-router-dom';

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
                <Tab label="My auctions" to={ROUTES.BORROWER_COMMITMENTS_AUCTIONS} component={NavLink} />
                <Tab label="My loans" to={ROUTES.BORROWER_COMMITMENTS_LOANS} component={NavLink} />
            </Tabs>
            <Switch>
                <Route path={ROUTES.BORROWER_COMMITMENTS} exact>
                    <Redirect to={ROUTES.BORROWER_COMMITMENTS_AUCTIONS} />
                </Route>
                <Route path={ROUTES.BORROWER_COMMITMENTS_AUCTIONS}>
                    {userAuctionsList && <AuctionTable auctionsList={userAuctionsList} borrowerUserAuctions />}
                </Route>
                <Route path={ROUTES.BORROWER_COMMITMENTS_LOANS}>
                    <div>My Loans</div>
                </Route>
            </Switch>
        </>
    );
};

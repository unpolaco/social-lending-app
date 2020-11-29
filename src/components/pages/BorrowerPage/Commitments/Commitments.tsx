import React from 'react';
import {Typography, Tabs, Tab} from '@material-ui/core/';
import {ROUTES} from '../../../../helpers/routes';
import {NavLink, Route, Switch, Redirect, useLocation} from 'react-router-dom';
import {CommitmentsAuctions} from './CommitmentsAuctions';
import {CommitmentsLoans} from './CommitmentsLoans';

export const Commitments: React.FC = () => {
    const auctionsPath = ROUTES.BORROWER_COMMITMENTS_AUCTIONS;
    const loansPath = ROUTES.BORROWER_COMMITMENTS_LOANS;
    let activeRoute = useLocation().pathname;
    if (activeRoute === ROUTES.BORROWER_COMMITMENTS) {
        activeRoute = ROUTES.BORROWER_COMMITMENTS_AUCTIONS;
    }
    return (
        <>
            <Typography align="center" variant="h6">
                Welcome to your Auctions & Loans
            </Typography>
            <Typography align="center" variant="subtitle2">
                Here you can find list of your auctions and loans and manage them
            </Typography>
            <Tabs value={activeRoute} centered>
                <Tab label="My auctions" to={auctionsPath} value={auctionsPath} component={NavLink} data-testid="myAuctionsBtn" />
                <Tab label="My loans" to={loansPath} value={loansPath} component={NavLink} />
            </Tabs>
            <Switch>
                <Route path={ROUTES.BORROWER_COMMITMENTS} exact>
                    <Redirect to={ROUTES.BORROWER_COMMITMENTS_AUCTIONS} />
                </Route>
                <Route path={ROUTES.BORROWER_COMMITMENTS_AUCTIONS}>
                    <CommitmentsAuctions />
                </Route>
                <Route path={ROUTES.BORROWER_COMMITMENTS_LOANS}>
                    <CommitmentsLoans />
                </Route>
            </Switch>
        </>
    );
};

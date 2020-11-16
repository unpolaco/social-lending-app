import React, {useState} from 'react';
import {Typography, Tabs, Tab} from '@material-ui/core/';
import {ROUTES} from '../../../../helpers/routes';
import {NavLink, Route, Switch, Redirect} from 'react-router-dom';
import {CommitmentsAuctions} from './CommitmentsAuctions';
import {CommitmentsLoans} from './CommitmentsLoans';

export const Commitments: React.FC = () => {
    const [value, setValue] = useState(0);
    const handleChange = (event: React.ChangeEvent<any>, newValue: number) => {
        setValue(newValue);
    };
    return (
        <>
            <Typography align="center" variant="h6">
                Welcome to your Auctions & Loans
            </Typography>
            <Typography align="center" variant="subtitle2">
                Here you can find list of your auctions and loans and manage them
            </Typography>
            <Tabs value={value} onChange={handleChange} centered>
                <Tab label="My auctions" to={ROUTES.BORROWER_COMMITMENTS_AUCTIONS} component={NavLink} />
                <Tab label="My loans" to={ROUTES.BORROWER_COMMITMENTS_LOANS} component={NavLink} />
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

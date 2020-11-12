import React from 'react';
import {Typography, Tabs, Tab} from '@material-ui/core/';
import {ROUTES} from '../../../helpers/routes';
import {NavLink, Route, Switch, Redirect} from 'react-router-dom';

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
                <Tab label="My offers" to={ROUTES.LENDER_PORTFOLIO_USEROFFERS} component={NavLink} />
                <Tab label="My investments" to={ROUTES.LENDER_PORTFOLIO_USERINVESTMENTS} component={NavLink} />
            </Tabs>

            <Switch>
                <Route path={ROUTES.LENDER_PORTFOLIO} exact>
                    <Redirect to={ROUTES.LENDER_PORTFOLIO_USEROFFERS} />
                </Route>
                <Route path={ROUTES.LENDER_PORTFOLIO_USEROFFERS}>
                    <div>My Offers</div>
                </Route>
                <Route path={ROUTES.LENDER_PORTFOLIO_USERINVESTMENTS}>
                    <div>My Investments</div>
                </Route>
            </Switch>
        </>
    );
};

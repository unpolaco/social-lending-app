import React from 'react';
import {Typography, Tabs, Tab} from '@material-ui/core/';
import {ROUTES} from '../../../../helpers/routes';
import {NavLink, Route, Switch, Redirect, useLocation} from 'react-router-dom';
import {PortfolioOffers} from './PortfolioOffers';
import {PortfolioInvestments} from './PortfolioInvestments';

export const Portfolio: React.FC = () => {
    const offersPath = ROUTES.LENDER_PORTFOLIO_USEROFFERS;
    const investmentsPath = ROUTES.LENDER_PORTFOLIO_USERINVESTMENTS;
    let activeRoute = useLocation().pathname;
    if (activeRoute === ROUTES.LENDER_PORTFOLIO) {
        activeRoute = ROUTES.LENDER_PORTFOLIO_USEROFFERS;
    }

    return (
        <>
            <Typography align="center" variant="h6">
                Welcome to your Portfolio
            </Typography>
            <Typography align="center" variant="subtitle2">
                Here you can find list of your offers and investments and manage them
            </Typography>
            <Tabs value={activeRoute} centered>
                <Tab label="My offers" to={offersPath} value={offersPath} component={NavLink} />
                <Tab label="My investments" to={investmentsPath} value={investmentsPath} component={NavLink} />
            </Tabs>

            <Switch>
                <Route path={ROUTES.LENDER_PORTFOLIO} exact>
                    <Redirect to={ROUTES.LENDER_PORTFOLIO_USEROFFERS} />
                </Route>
                <Route path={ROUTES.LENDER_PORTFOLIO_USEROFFERS}>
                    <PortfolioOffers />
                </Route>
                <Route path={ROUTES.LENDER_PORTFOLIO_USERINVESTMENTS}>
                    <PortfolioInvestments />
                </Route>
            </Switch>
        </>
    );
};

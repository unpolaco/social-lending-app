import React from 'react';
import {Container, ButtonGroup, Button} from '@material-ui/core/';
import {ROUTES} from '../../helpers/routes';
import {NavLink, Route, Switch} from 'react-router-dom';
import {LenderAccount} from './LenderAccount/LenderAccount';
import {LenderPortfolio} from './LenderPortfolio/LenderPortfolio';
import {LenderInvest} from './LenderInvest/LenderInvest';

export const Lender: React.FC = () => {
    return (
        <>
            <Container>
                <ButtonGroup fullWidth variant="text" color="primary" aria-label="text primary button group">
                    <Button component={NavLink} to={ROUTES.LENDER_INVEST}>
                        Invest
                    </Button>
                    <Button component={NavLink} to={ROUTES.LENDER_PORTFOLIO}>
                        Portfolio
                    </Button>
                    <Button component={NavLink} to={ROUTES.LENDER_ACCOUNT}>
                        My account
                    </Button>
                </ButtonGroup>
            </Container>

            <Switch>
                <Route path={ROUTES.LENDER_ACCOUNT}>
                    <LenderAccount />
                </Route>
                <Route path={ROUTES.LENDER_PORTFOLIO}>
                    <LenderPortfolio />
                </Route>
                <Route path={ROUTES.LENDER_INVEST}>
                    <LenderInvest />
                </Route>
            </Switch>
        </>
    );
};

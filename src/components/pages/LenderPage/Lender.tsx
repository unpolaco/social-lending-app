import React from 'react';
import {ButtonGroup, Button} from '@material-ui/core/';
import {ROUTES} from '../../../helpers/routes';
import {NavLink, Route, Switch, Redirect} from 'react-router-dom';
import {Account} from './Account/Account';
import {Portfolio} from './Portfolio/Portfolio';
import {Invest} from './Invest/Invest';
import {StyledBackgroundPaper, NavigationBox} from './Lender.styles';

export const Lender: React.FC = () => {
    return (
        <>
            <NavigationBox>
                <ButtonGroup fullWidth variant="text" color="secondary">
                    <Button component={NavLink} to={ROUTES.LENDER_INVEST}>
                        Invest
                    </Button>
                    <Button component={NavLink} to={ROUTES.LENDER_PORTFOLIO}>
                        Portfolio
                    </Button>
                    <Button component={NavLink} to={ROUTES.LENDER_ACCOUNT} data-testid="lenderAccountPageBtn">
                        My account
                    </Button>
                </ButtonGroup>
            </NavigationBox>
            <StyledBackgroundPaper>
                <Switch>
                    <Route path={ROUTES.LENDER} exact>
                        <Redirect to={ROUTES.LENDER_INVEST} />
                    </Route>
                    <Route path={ROUTES.LENDER_INVEST}>
                        <Invest />
                    </Route>
                    <Route path={ROUTES.LENDER_PORTFOLIO}>
                        <Portfolio />
                    </Route>
                    <Route path={ROUTES.LENDER_ACCOUNT}>
                        <Account />
                    </Route>
                </Switch>
            </StyledBackgroundPaper>
        </>
    );
};

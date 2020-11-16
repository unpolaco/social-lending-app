import React from 'react';
import {ButtonGroup, Button} from '@material-ui/core/';
import {ROUTES} from '../../../helpers/routes';
import {NavLink, Route, Switch, Redirect} from 'react-router-dom';
import {Commitments} from './Commitments/Commitments';
import {Auctions} from './Auctions/Auctions';
import {Account} from './Account/Account';
import {StyledBackgroundPaper, NavigationBox} from './Borrower.styles';

export const Borrower: React.FC = () => {
    return (
        <>
            <NavigationBox>
                <ButtonGroup fullWidth variant="text" color="secondary">
                    <Button component={NavLink} to={ROUTES.BORROWER_AUCTIONS}>
                        All Auctions
                    </Button>
                    <Button component={NavLink} to={ROUTES.BORROWER_COMMITMENTS}>
                        Loans & My auctions
                    </Button>
                    <Button component={NavLink} to={ROUTES.BORROWER_ACCOUNT}>
                        My account
                    </Button>
                </ButtonGroup>
            </NavigationBox>
            <StyledBackgroundPaper>
                <Switch>
                    <Route path={ROUTES.BORROWER} exact>
                        <Redirect to={ROUTES.BORROWER_COMMITMENTS} />
                    </Route>
                    <Route path={ROUTES.BORROWER_AUCTIONS}>
                        <Auctions />
                    </Route>
                    <Route path={ROUTES.BORROWER_COMMITMENTS}>
                        <Commitments />
                    </Route>
                    <Route path={ROUTES.BORROWER_ACCOUNT}>
                        <Account />
                    </Route>
                </Switch>
            </StyledBackgroundPaper>
        </>
    );
};

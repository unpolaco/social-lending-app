import React from 'react';
import {Container, ButtonGroup, Button} from '@material-ui/core/';
import {ROUTES} from '../../helpers/routes';
import {NavLink, Route, Switch} from 'react-router-dom';
import {BorrowerCommitments} from './BorrowerCommitments';
import {BorrowerAuctions} from './BorrowerAuctions';
import {BorrowerAccount} from './BorrowerAccount';

export const Borrower = () => {
    return (
        <>
            <Container>
                <ButtonGroup fullWidth variant="text" color="primary" aria-label="text primary button group">
                    <Button component={NavLink} to={ROUTES.BORROWER_COMMITMENTS}>
                        Loans & My auctions
                    </Button>
                    <Button component={NavLink} to={ROUTES.BORROWER_AUCTIONS}>
                        All Auctions
                    </Button>
                    <Button component={NavLink} to={ROUTES.BORROWER_ACCOUNT}>
                        My account
                    </Button>
                </ButtonGroup>
            </Container>

            <Switch>
                <Route path={ROUTES.BORROWER_AUCTIONS}>
                    <BorrowerAuctions />
                </Route>
                <Route path={ROUTES.BORROWER_COMMITMENTS}>
                    <BorrowerCommitments />
                </Route>
                <Route path={ROUTES.BORROWER_ACCOUNT}>
                    <BorrowerAccount />
                </Route>
            </Switch>
        </>
    );
};

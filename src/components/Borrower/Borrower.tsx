import React from 'react';
import {ButtonGroup, Button} from '@material-ui/core/';
import {ROUTES} from '../../helpers/routes';
import {NavLink, Route, Switch} from 'react-router-dom';
import {BorrowerCommitments} from './BorrowerCommitments/BorrowerCommitments';
import {BorrowerAuctions} from './BorrowerAuctions/BorrowerAuctions';
import {BorrowerAccount} from './BorrowerAccount/BorrowerAccount';
import {StyledBackgroundPaper, NavigationBox} from './Borrower.styles';

export const Borrower: React.FC = () => {
    return (
        <>
            <NavigationBox>
                <ButtonGroup fullWidth variant="text" color="primary">
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
            </StyledBackgroundPaper>
        </>
    );
};

import React from 'react';
import {BrowserRouter, NavLink, Route, Switch} from 'react-router-dom';
import {Container, Button} from '@material-ui/core';
import {getBaseName} from './App.helpers';
import {Header} from './Header';
import {ROUTES} from '../helpers/routes';
import {Lender} from './Lender/Lender';
import {Borrower} from './Borrower/Borrower';

export const App = () => {
    const basename = getBaseName();

    return (
        <BrowserRouter basename={basename}>
            <Header />
            <Switch>
                <Route path={'/'} exact>
                    <Container maxWidth="sm">
                        <Button component={NavLink} to={ROUTES.BORROWER} variant="outlined">
                            Enter as Borrower
                        </Button>
                        <Button component={NavLink} to={ROUTES.LENDER} variant="outlined">
                            Enter as Lender
                        </Button>
                    </Container>
                </Route>
                <Route path={ROUTES.LENDER}>
                    <Lender />
                </Route>
                <Route path={ROUTES.BORROWER}>
                    <Borrower />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

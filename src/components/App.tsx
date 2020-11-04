import React from 'react';
import {BrowserRouter, Redirect, NavLink, Route, Switch} from 'react-router-dom';
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
                    <main>
                        <NavLink to={ROUTES.BORROWER}>Enter as Borrower</NavLink>
                        <NavLink to={ROUTES.LENDER}>Enter as Lender</NavLink>
                    </main>
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

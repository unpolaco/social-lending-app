import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {getBaseName} from './App.helpers';
import {Header} from '../Header/Header';
import {ROUTES} from '../../helpers/routes';
import {Lender} from '../pages/LenderPage/Lender';
import {Borrower} from '../pages/BorrowerPage/Borrower';
import {MainPage} from '../pages/MainPage/MainPage';
import {StyledBox} from './App.styles';
import {ThemeProvider} from '@material-ui/core/styles';
import {solidTheme} from '../../helpers/constants-colors';
export const App: React.FC = () => {
    const basename = getBaseName();

    return (
        <BrowserRouter basename={basename}>
            <ThemeProvider theme={solidTheme}>
                <Header />
                <Switch>
                    <StyledBox>
                        <Route path={ROUTES.HOME} exact>
                            <MainPage />
                        </Route>
                        <Route path={ROUTES.LENDER}>
                            <Lender />
                        </Route>
                        <Route path={ROUTES.BORROWER}>
                            <Borrower />
                        </Route>
                    </StyledBox>
                </Switch>
            </ThemeProvider>
        </BrowserRouter>
    );
};

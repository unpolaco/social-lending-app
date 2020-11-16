import React from 'react';
import {NavLink} from 'react-router-dom';
import {Button, Typography} from '@material-ui/core';
import {ROUTES} from '../../../helpers/routes';
import {StyledMainBox, WelcomeBox, StyledBox} from './MainPage.styles';

export const MainPage: React.FC = () => {
    return (
        <StyledMainBox>
            <StyledBox>
                <WelcomeBox>
                    <Typography variant="h6">Welcome to our SOLID Lending Page</Typography>
                </WelcomeBox>
                <WelcomeBox>
                    <Button component={NavLink} to={ROUTES.BORROWER} variant="outlined" color="secondary">
                        Enter as Borrower
                    </Button>
                    <Button component={NavLink} to={ROUTES.LENDER} variant="outlined" color="secondary">
                        Enter as Lender
                    </Button>
                </WelcomeBox>
            </StyledBox>
        </StyledMainBox>
    );
};

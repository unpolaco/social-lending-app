import React from 'react';
import {NavLink} from 'react-router-dom';
import {Container, Button} from '@material-ui/core';
import {ROUTES} from '../../helpers/routes';

export const MainPage: React.FC = () => {
    return (
        <Container maxWidth="sm">
            <Button component={NavLink} to={ROUTES.BORROWER} variant="outlined">
                Enter as Borrower
            </Button>
            <Button component={NavLink} to={ROUTES.LENDER} variant="outlined">
                Enter as Lender
            </Button>
        </Container>
    );
};

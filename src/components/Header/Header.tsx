import React from 'react';
import {Typography, Button} from '@material-ui/core';
import {HeaderContainer} from './Header.styles';
import {NavLink} from 'react-router-dom';
import {ROUTES} from '../../helpers/routes';

export const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <Typography variant="h6">SOLID Lending Platform</Typography>
            <Button component={NavLink} to={ROUTES.HOME} variant="outlined">
                Log out
            </Button>
        </HeaderContainer>
    );
};

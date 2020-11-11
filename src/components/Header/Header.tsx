import React from 'react';
import {Typography, Button} from '@material-ui/core';
import {HeaderContainer} from './Header.styles';

export const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <Typography variant="h6">SOLID Lending Platform</Typography>
            <Button variant="outlined">Log out</Button>
        </HeaderContainer>
    );
};

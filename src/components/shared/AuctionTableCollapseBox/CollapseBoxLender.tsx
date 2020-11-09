import React from 'react';
import {Typography, Box, Button} from '@material-ui/core/';

export const CollapseBoxLender: React.FC = () => {
    return (
        <Box>
            <Typography>Create an offer for this auction</Typography>
            <Button variant="outlined">Create offer</Button>
        </Box>
    );
};

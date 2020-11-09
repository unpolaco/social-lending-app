import React from 'react';
import {Typography, Box, Button} from '@material-ui/core/';

export const CollapseBoxBorrowerUserAuctions: React.FC = () => {
    return (
        <Box>
            <Typography>Edit or delete your auction</Typography>
            <Button variant="outlined" disabled>
                Edit
            </Button>
            <Button variant="outlined" disabled>
                Delete
            </Button>
        </Box>
    );
};

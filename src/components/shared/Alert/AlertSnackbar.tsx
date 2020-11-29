import React from 'react';
import MuiAlert, {AlertProps} from '@material-ui/lab/Alert';
import {Snackbar} from '@material-ui/core';
import {AlertTypeProps} from './Alert.types';

export const Alert = (props: AlertProps) => {
    return <MuiAlert variant="filled" {...props} />;
};

export const AlertSnackBar: React.FC<AlertTypeProps> = ({handleCloseAlert, alertType, alertText}) => {
    return (
        <Snackbar open={true} autoHideDuration={6000} onClose={() => handleCloseAlert!(false)} onClick={() => handleCloseAlert!(false)}>
            <Alert severity={alertType}>{alertText}</Alert>
        </Snackbar>
    );
};

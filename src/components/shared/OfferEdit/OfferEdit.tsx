import React from 'react';
import {Box, Typography} from '@material-ui/core/';
import {StyledButton} from './EditOffer.styles';
import {useDeleteUserOffer} from '../../../hooks/api/offer/useDeleteUserOffer';
import {AlertSnackBar} from '../Alert/AlertSnackbar';
import {prepareAlertDetails} from '../Alert/Alert.helpers';
import {AlertTypeProps} from '../Alert/Alert.types';

export const OfferEdit: React.FC<any> = ({row, fetchUserOffers}) => {
    const {
        isFetchingDelete,
        isErrorDelete,
        setIsErrorDelete,
        isResponseDelete,
        setIsResponseDelete,
        fetchDeleteUserOffer,
    } = useDeleteUserOffer();
    const offerId: number = row.offerId;
    const userName: string = row.lenderUserName;

    async function handleDeleteOffer() {
        await fetchDeleteUserOffer(offerId);
        fetchUserOffers(userName);
    }

    let alertDetails: AlertTypeProps = {};
    if (isErrorDelete) {
        alertDetails = prepareAlertDetails(setIsErrorDelete, 'error', 'Your offer was not deleted');
    } else if (isResponseDelete) {
        alertDetails = prepareAlertDetails(setIsResponseDelete, 'success', 'Your offer was deleted');
    }

    return (
        <Box>
            {row.status === 'ARCHIVED' ? (
                <Typography>This offer is archived</Typography>
            ) : (
                <StyledButton variant="outlined" onClick={handleDeleteOffer} disabled={isFetchingDelete}>
                    Delete
                </StyledButton>
            )}
            {alertDetails.alertType && (
                <AlertSnackBar
                    alertType={alertDetails.alertType}
                    alertText={alertDetails.alertText}
                    handleCloseAlert={alertDetails.handleCloseAlert}
                ></AlertSnackBar>
            )}
        </Box>
    );
};

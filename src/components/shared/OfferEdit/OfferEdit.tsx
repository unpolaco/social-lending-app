import React from 'react';
import {Box, Button, CircularProgress, Typography} from '@material-ui/core/';
import {useDeleteUserOffer} from '../../../hooks/api/offer/useDeleteUserOffer';

export const OfferEdit: React.FC<any> = ({row, fetchUserOffers}) => {
    const {isFetchingDelete, isErrorDelete, fetchDeleteUserOffer} = useDeleteUserOffer();
    const offerId: number = row.offerId;
    const userName: string = row.lenderUserName;

    if (isFetchingDelete) {
        return <CircularProgress />;
    }
    if (isErrorDelete) {
        alert('Error');
    }

    async function handleDeleteOffer() {
        await fetchDeleteUserOffer(offerId);
        fetchUserOffers(userName);
    }

    return (
        <Box>
            {row.status === 'ARCHIVED' ? (
                <Typography>This offer is archived</Typography>
            ) : (
                <Button variant="outlined" onClick={handleDeleteOffer} disabled={isFetchingDelete}>
                    Delete
                </Button>
            )}
        </Box>
    );
};

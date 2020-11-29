import React from 'react';
import {Typography, Box, Button, CircularProgress} from '@material-ui/core/';
import {useGetCreateLoan} from '../../../hooks/api/auction/useGetCreateLoan';
import {useDeleteAuction} from '../../../hooks/api/auction/useDeleteAuction';
import {LoanConfirm} from '../LoanConfirm/LoanConfirm';
import {AlertSnackBar} from '../Alert/AlertSnackbar';
import {prepareAlertDetails} from '../Alert/Alert.helpers';

export const LoanCreate: React.FC<any> = ({row, fetchUserAuctions}) => {
    const {isFetchingCreateLoan, isErrorCreateLoan, setIsErrorCreateLoan, fetchCreateLoan, loanDetails} = useGetCreateLoan();
    const {
        isFetchingDelete,
        isErrorDelete,
        setIsErrorDelete,
        isResponseDelete,
        setIsResponseDelete,
        fetchDeleteAuction,
    } = useDeleteAuction();
    const disabled = row.status !== 'ACTIVE_COMPLETE';
    const auctionId: number = row.id;
    const userName = row.borrower;

    function handleCreateLoan() {
        fetchCreateLoan(auctionId);
    }
    async function handleDeleteAuction() {
        await fetchDeleteAuction(auctionId);
        fetchUserAuctions(userName);
    }

    let alertDetails: any = {};
    if (isErrorCreateLoan) {
        alertDetails = prepareAlertDetails(setIsErrorCreateLoan, 'error', 'Your loan was not created');
    } else if (isErrorDelete) {
        alertDetails = prepareAlertDetails(setIsErrorDelete, 'error', 'Your auction was not deleted');
    } else if (isResponseDelete) {
        alertDetails = prepareAlertDetails(setIsResponseDelete, 'success', 'Your auction was not deleted');
    }

    return (
        <Box>
            {row.status === 'ARCHIVED' ? (
                <Typography>This auction is archived.</Typography>
            ) : (
                <>
                    <Typography>Make a loan or delete your auction</Typography>
                    <Button variant="outlined" onClick={handleDeleteAuction} disabled={isFetchingDelete}>
                        Delete
                    </Button>
                    <Button variant="outlined" onClick={handleCreateLoan} disabled={disabled}>
                        Make loan
                    </Button>
                    {isFetchingCreateLoan || isFetchingDelete ? (
                        <CircularProgress />
                    ) : (
                        loanDetails && <LoanConfirm loanDetails={loanDetails} />
                    )}
                </>
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

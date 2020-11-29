import React from 'react';
import {Rating} from '@material-ui/lab';
import {TextBold, TextLight, StyledCard, StyledOpinionCard, TextOpinion, StyledButton} from './PublicProfile.styles';
import {useGetAccountPublicProfile} from '../../../hooks/api/account/useGetAccountPublicProfile';
import {CircularProgress} from '@material-ui/core';
import {OpinionForm} from '../../../../src/api/api.types';
import {LeaveOpinion} from '../LeaveOpinion/LeaveOpinion';
import {PublicProfileProps} from './PublicProfile.types';
import {prepareAlertDetails} from '../Alert/Alert.helpers';
import {AlertSnackBar} from '../Alert/AlertSnackbar';
import {AlertTypeProps} from '../Alert/Alert.types';

export const PublicProfile: React.FC<PublicProfileProps> = ({row, page}) => {
    const {isFetchingGet, isErrorGet, setIsErrorGet, fetchAccountPublicProfile, publicProfile} = useGetAccountPublicProfile();

    const userName: string = page === 'lenderUserInvestments' ? row.borrowerName : row.borrower;
    const investmentId = row.investmentId;
    const currentInvestmentOpinion = publicProfile?.opinions?.find((opinion: OpinionForm) => opinion.investmentId === investmentId);

    function handleGetPublicProfile() {
        fetchAccountPublicProfile(userName);
    }
    const alertDetails: AlertTypeProps = isErrorGet && prepareAlertDetails(setIsErrorGet);

    return (
        <div>
            {isFetchingGet ? (
                <CircularProgress />
            ) : (
                <>
                    <StyledButton onClick={handleGetPublicProfile} variant="outlined">
                        Check user profile {page === 'lenderUserInvestments' && ' and leave opinion'}{' '}
                    </StyledButton>
                    {publicProfile && (
                        <>
                            <TextBold>User public profile</TextBold>
                            <StyledCard>
                                <TextLight>First name</TextLight>
                                <TextBold>{publicProfile.name}</TextBold>
                                <TextLight>Surname</TextLight>
                                <TextBold>{publicProfile.surname}</TextBold>
                                <TextLight>User email</TextLight>
                                <TextBold>{publicProfile.email}</TextBold>
                                <TextLight>User rating</TextLight>
                                <Rating size="small" value={+publicProfile.totalRating} precision={0.5} readOnly />
                                {publicProfile.opinions.map((opinion: OpinionForm, index) => (
                                    <StyledOpinionCard key={index}>
                                        <TextOpinion>{opinion.author}</TextOpinion>
                                        <Rating size="small" precision={0.5} value={+opinion.opinionRating} readOnly />
                                        <TextOpinion>{opinion.opinionText}</TextOpinion>
                                    </StyledOpinionCard>
                                ))}
                                {page === 'lenderUserInvestments' && (
                                    <LeaveOpinion
                                        row={row}
                                        currentInvestmentOpinion={currentInvestmentOpinion}
                                        handleGetPublicProfile={handleGetPublicProfile}
                                    />
                                )}
                            </StyledCard>
                        </>
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
        </div>
    );
};

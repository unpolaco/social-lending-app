import React from 'react';
import {Rating} from '@material-ui/lab';
import {TextBold, TextLight, StyledCard, StyledOpinionCard} from './PublicProfile.styles';
import {useGetAccountPublicProfile} from '../../../hooks/api/account/useGetAccountPublicProfile';
import {Button, CircularProgress} from '@material-ui/core';
import {OpinionForm} from '../../../../src/api/api.types';
import {LeaveOpinion} from '../LeaveOpinion/LeaveOpinion';
import {PublicProfileProps} from './PublicProfile.types';
import {prepareAlertDetails} from '../Alert/Alert.helpers';
import {AlertSnackBar} from '../Alert/AlertSnackbar';

export const PublicProfile: React.FC<PublicProfileProps> = ({row, page}) => {
    const {isFetchingGet, isErrorGet, setIsErrorGet, fetchAccountPublicProfile, publicProfile} = useGetAccountPublicProfile();
    const userName: string = row.borrowerName;
    const investmentId = row.investmentId;
    const currentInvestmentOpinion = publicProfile?.opinions?.find((opinion: OpinionForm) => opinion.investmentId === investmentId);

    function handleGetPublicProfile() {
        fetchAccountPublicProfile(userName);
    }

    const alertDetails = isErrorGet && prepareAlertDetails(setIsErrorGet);

    return (
        <div>
            <Button onClick={handleGetPublicProfile} variant="outlined">
                Check user profile {page === 'lenderUserInvestments' && ' and leave opinion'}{' '}
            </Button>
            {publicProfile && (
                <>
                    <TextBold>User public profile</TextBold>
                    {isFetchingGet && <CircularProgress />}
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
                                <TextBold>{opinion.author}</TextBold>
                                <Rating size="small" precision={0.5} value={+opinion.opinionRating} readOnly />
                                <TextBold>{opinion.opinionText}</TextBold>
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

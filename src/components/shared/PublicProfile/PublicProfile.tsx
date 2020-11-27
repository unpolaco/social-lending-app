import React from 'react';
import {Rating} from '@material-ui/lab';
import {TextBold, TextLight, StyledCard, StyledOpinionCard} from './PublicProfile.styles';
import {useGetAccountPublicProfile} from '../../../hooks/api/account/useGetAccountPublicProfile';
import {Button, CircularProgress} from '@material-ui/core';
import {Opinions} from '../../../helpers/types';
import {LeaveOpinion} from '../LeaveOpinion/LeaveOpinion';

export const PublicProfile: React.FC<any> = ({row, page}) => {
    const {isFetchingGet, isErrorGet, fetchAccountPublicProfile, publicProfile} = useGetAccountPublicProfile();
    const userName: string = page === 'lenderUserInvestments' ? row.borrowerName : row.borrower;

    if (isFetchingGet) {
        return <CircularProgress />;
    }
    if (isErrorGet) {
        alert('Error');
    }

    function handleGetPublicProfile() {
        fetchAccountPublicProfile(userName);
    }

    return (
        <div>
            <Button onClick={handleGetPublicProfile} variant="outlined">
                Check user profile {page === 'lenderUserInvestments' && ' and leave opinion'}{' '}
            </Button>
            {publicProfile && (
                <>
                    <TextBold>User public profile</TextBold>
                    <StyledCard>
                        <TextLight>User email</TextLight>
                        <TextBold>{publicProfile.email}</TextBold>
                        <Rating size="small" value={+publicProfile.totalRating} precision={0.5} readOnly />
                        {publicProfile.opinions.map((opinion: Opinions, index) => (
                            <StyledOpinionCard key={index}>
                                <TextBold>{opinion.author}</TextBold>
                                <Rating size="small" precision={0.5} value={+opinion.opinionRating} readOnly />
                                <TextBold>{opinion.opinionText}</TextBold>
                            </StyledOpinionCard>
                        ))}
                        {page === 'lenderUserInvestments' && <LeaveOpinion row={row} />}
                    </StyledCard>
                </>
            )}
        </div>
    );
};

import React from 'react';
import {Rating} from '@material-ui/lab';
import {Text} from './PublicProfile.styles';
import {useGetAccountPublicProfile} from '../../../hooks/api/account/useGetAccountPublicProfile';
import {Button, CircularProgress} from '@material-ui/core';
import {Opinions} from '../../../helpers/types';

export const PublicProfile: React.FC<any> = ({row}) => {
    const {isFetchingGet, isErrorGet, fetchAccountPublicProfile, publicProfile} = useGetAccountPublicProfile();
    const userName: string = row.borrower;

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
            <Button onClick={handleGetPublicProfile}>Check user profile</Button>
            {publicProfile && (
                <div>
                    <Text>{publicProfile.email}</Text>
                    <Text>User rating</Text>
                    <Rating size="small" value={+publicProfile.totalRating} readOnly />
                    {publicProfile.opinions.map((opinion: Opinions) => (
                        <div key={opinion.author}>
                            <Text>user</Text>
                            <Text>{opinion.author}</Text>
                            <Rating size="small" value={+opinion.opinionRating} readOnly />
                            <Text>{opinion.opinionText}</Text>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

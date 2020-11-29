import React from 'react';
import {StyledCard, TextLight, TextBold, Title} from './PrivateProfile.styles';
import {PrivateProfileProps} from './PrivateProfile.types';

export const PrivateProfile: React.FC<PrivateProfileProps> = ({accountDetails}) => {
    return (
        <StyledCard>
            <Title>Your private account details</Title>
            <TextLight>Username</TextLight>
            <TextBold>{accountDetails.userName}</TextBold>
            <TextLight>First name</TextLight>
            <TextBold>{accountDetails.name}</TextBold>
            <TextLight>Surname</TextLight>
            <TextBold>{accountDetails.surname}</TextBold>
            <TextLight>Address</TextLight>
            <TextBold>{accountDetails.address}</TextBold>
            <TextLight>E-mail</TextLight>
            <TextBold>{accountDetails.email}</TextBold>
            <TextLight>Phone number</TextLight>
            <TextBold>{accountDetails.phoneNumber}</TextBold>
        </StyledCard>
    );
};

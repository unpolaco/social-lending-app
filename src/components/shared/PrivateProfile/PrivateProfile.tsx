import React from 'react';
import {StyledCard, TextLight, TextBold} from './PrivateProfile.styles';

export const PrivateProfile: React.FC<any> = ({accountDetails}) => {
    return (
        <StyledCard>
            <TextLight>Username</TextLight>
            <TextBold>{accountDetails.userName}</TextBold>
            <TextLight>First name</TextLight>
            <TextBold>{accountDetails.name}</TextBold>
            <TextLight>Surname</TextLight>
            <TextBold>{accountDetails.surname}</TextBold>
            <TextLight>E-mail</TextLight>
            <TextBold>{accountDetails.email}</TextBold>
            <TextLight>Phone number</TextLight>
            <TextBold>{accountDetails.phoneNumber}</TextBold>
        </StyledCard>
    );
};

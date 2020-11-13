import styled from '@emotion/styled';
import {Card, Accordion} from '@material-ui/core/';

export const CreateAuctionCardWrapper = styled(Card)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    padding: 15px;
`;
export const StyledAccordion = styled(Accordion)`
    width: 100%;
    padding: 15px;
`;
export const FormWrapper = styled.div`
    padding: 20px;
    border: 1px solid white;
    display: flex;
    flex-direction: column;
    height: 300px;
    justify-content: space-between;
    border-radius: 5px;
`;

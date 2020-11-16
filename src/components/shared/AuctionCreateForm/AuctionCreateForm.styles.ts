import styled from '@emotion/styled';
import {Card} from '@material-ui/core/';
import {paletteColors} from '../../../helpers/constants-colors';

export const CreateAuctionCardWrapper = styled(Card)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 15px;
`;
export const AccordionWrapper = styled.div`
    border-radius: 5px;
    transition: 0.3s;
    &:hover {
        background-color: ${paletteColors.palette.hover.active};
    }
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

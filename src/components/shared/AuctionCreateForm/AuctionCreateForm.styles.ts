import styled from '@emotion/styled';
import {paletteColors} from '../../../helpers/constants-colors';

export const CreateAuctionCardWrapper = styled.div`
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
    display: flex;
    flex-direction: column;
    height: 300px;
    width: 300px;
    justify-content: space-between;
    padding: 20px;
    border: 1px solid ${paletteColors.palette.form.border};
    border-radius: 5px;
    background-color: ${paletteColors.palette.form.background};
`;

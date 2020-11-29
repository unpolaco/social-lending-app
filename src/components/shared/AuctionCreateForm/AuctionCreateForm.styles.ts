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
    height: 330px;
    width: 300px;
    justify-content: space-between;
    padding: 20px;
    border: 1px solid ${paletteColors.palette.form.border};
    border-radius: 5px;
    background-color: ${paletteColors.palette.form.background};
`;
export const Text = styled.p`
    font-weight: 400;
    font-size: 15px;
`;
export const TextBold = styled.p`
    font-weight: 500;
    font-size: 16px;
`;
export const TextWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5px 0;
`;
